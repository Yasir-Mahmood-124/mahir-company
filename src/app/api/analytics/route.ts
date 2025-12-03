// app/api/analytics/route.ts
import { BetaAnalyticsDataClient } from '@google-analytics/data'
import { NextResponse } from 'next/server'

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
})

const propertyId = process.env.GA_PROPERTY_ID

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  try {
    switch (type) {
      case 'overview':
        return await getOverviewData()
      case 'devices':
        return await getDeviceData()
      case 'sources':
        return await getSourceData()
      case 'pages':
        return await getPageData()
      case 'realtime':
        return await getRealtimeData()
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }
  } catch (error: any) {
    console.error('Analytics API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics', details: error.message }, 
      { status: 500 }
    )
  }
}

// Overview data - Total views, users, sessions (Last 30 days)
async function getOverviewData() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '30daysAgo',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'date',
      },
    ],
    metrics: [
      { name: 'activeUsers' },
      { name: 'sessions' },
      { name: 'screenPageViews' },
    ],
  })

  const data = response.rows?.map((row) => ({
    date: row.dimensionValues?.[0]?.value || '',
    users: parseInt(row.metricValues?.[0]?.value || '0'),
    sessions: parseInt(row.metricValues?.[1]?.value || '0'),
    pageViews: parseInt(row.metricValues?.[2]?.value || '0'),
  })) || []

  return NextResponse.json({ data })
}

// Device data - Mobile vs Desktop vs Tablet
async function getDeviceData() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '30daysAgo',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'deviceCategory',
      },
    ],
    metrics: [
      { name: 'activeUsers' },
      { name: 'sessions' },
    ],
  })

  const data = response.rows?.map((row) => ({
    device: row.dimensionValues?.[0]?.value || 'Unknown',
    users: parseInt(row.metricValues?.[0]?.value || '0'),
    sessions: parseInt(row.metricValues?.[1]?.value || '0'),
  })) || []

  return NextResponse.json({ data })
}

// Traffic sources - Where visitors came from
async function getSourceData() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '30daysAgo',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'sessionSource',
      },
      {
        name: 'sessionMedium',
      },
    ],
    metrics: [
      { name: 'activeUsers' },
      { name: 'sessions' },
    ],
    orderBys: [
      {
        metric: {
          metricName: 'sessions',
        },
        desc: true,
      },
    ],
    limit: 10,
  })

  const data = response.rows?.map((row) => ({
    source: row.dimensionValues?.[0]?.value || 'Unknown',
    medium: row.dimensionValues?.[1]?.value || 'Unknown',
    users: parseInt(row.metricValues?.[0]?.value || '0'),
    sessions: parseInt(row.metricValues?.[1]?.value || '0'),
  })) || []

  return NextResponse.json({ data })
}

// Most visited pages
async function getPageData() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '30daysAgo',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'pageTitle',
      },
      {
        name: 'pagePath',
      },
    ],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'averageSessionDuration' },
    ],
    orderBys: [
      {
        metric: {
          metricName: 'screenPageViews',
        },
        desc: true,
      },
    ],
    limit: 10,
  })

  const data = response.rows?.map((row) => ({
    title: row.dimensionValues?.[0]?.value || 'Unknown',
    path: row.dimensionValues?.[1]?.value || '/',
    views: parseInt(row.metricValues?.[0]?.value || '0'),
    avgDuration: parseFloat(row.metricValues?.[1]?.value || '0'),
  })) || []

  return NextResponse.json({ data })
}

// Real-time active users
async function getRealtimeData() {
  const [response] = await analyticsDataClient.runRealtimeReport({
    property: `properties/${propertyId}`,
    metrics: [
      { name: 'activeUsers' },
    ],
  })

  const activeUsers = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0')

  return NextResponse.json({ activeUsers })
}