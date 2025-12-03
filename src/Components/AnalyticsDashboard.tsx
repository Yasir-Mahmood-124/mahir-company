'use client'

import React, { useEffect, useState } from 'react'

interface OverviewData {
  date: string
  users: number
  sessions: number
  pageViews: number
}

interface DeviceData {
  device: string
  users: number
  sessions: number
}

interface SourceData {
  source: string
  medium: string
  users: number
  sessions: number
}

interface PageData {
  title: string
  path: string
  views: number
  avgDuration: number
}

interface StatsType {
  totalUsers: number
  totalSessions: number
  totalPageViews: number
  avgSessionDuration: number
  bounceRate: number
}

const AnalyticsDashboard = () => {
  const [overviewData, setOverviewData] = useState<OverviewData[]>([])
  const [deviceData, setDeviceData] = useState<DeviceData[]>([])
  const [sourceData, setSourceData] = useState<SourceData[]>([])
  const [pageData, setPageData] = useState<PageData[]>([])
  const [realtimeUsers, setRealtimeUsers] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState('30d')
  const [activeView, setActiveView] = useState('overview')
  const [stats, setStats] = useState<StatsType>({
    totalUsers: 0,
    totalSessions: 0,
    totalPageViews: 0,
    avgSessionDuration: 0,
    bounceRate: 0,
  })

  useEffect(() => {
    fetchAnalyticsData()
    
    const interval = setInterval(() => {
      fetchRealtimeData()
    }, 30000)

    return () => clearInterval(interval)
  }, [dateRange])

  const fetchRealtimeData = async () => {
    try {
      const response = await fetch('/api/analytics?type=realtime')
      const data = await response.json()
      if (data.activeUsers !== undefined) {
        setRealtimeUsers(data.activeUsers)
      }
    } catch (error) {
      console.error('Failed to fetch realtime data:', error)
    }
  }

  const fetchAnalyticsData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const [overview, devices, sources, pages, realtime] = await Promise.all([
        fetch(`/api/analytics?type=overview&range=${dateRange}`).then(r => r.json()),
        fetch(`/api/analytics?type=devices&range=${dateRange}`).then(r => r.json()),
        fetch(`/api/analytics?type=sources&range=${dateRange}`).then(r => r.json()),
        fetch(`/api/analytics?type=pages&range=${dateRange}`).then(r => r.json()),
        fetch('/api/analytics?type=realtime').then(r => r.json()),
      ])

      if (overview.error) throw new Error(overview.error)

      setOverviewData(Array.isArray(overview.data) ? overview.data : [])
      setDeviceData(Array.isArray(devices.data) ? devices.data : [])
      setSourceData(Array.isArray(sources.data) ? sources.data : [])
      setPageData(Array.isArray(pages.data) ? pages.data : [])
      setRealtimeUsers(realtime.activeUsers || 0)

      const totals = (Array.isArray(overview.data) ? overview.data : []).reduce(
        (acc: StatsType, day: OverviewData) => ({
          totalUsers: acc.totalUsers + (day.users || 0),
          totalSessions: acc.totalSessions + (day.sessions || 0),
          totalPageViews: acc.totalPageViews + (day.pageViews || 0),
          avgSessionDuration: acc.avgSessionDuration,
          bounceRate: acc.bounceRate,
        }), 
        { totalUsers: 0, totalSessions: 0, totalPageViews: 0, avgSessionDuration: 145, bounceRate: 42.3 }
      )
      
      setStats(totals)
    } catch (error: any) {
      console.error('Failed to fetch analytics:', error)
      setError(error?.message || 'Failed to load analytics data')
    }
    
    setLoading(false)
  }

  const deviceColors: { [key: string]: string } = {
    'desktop': '#1976d2',
    'mobile': '#9c27b0',
    'tablet': '#e91e63',
    'Desktop': '#1976d2',
    'Mobile': '#9c27b0',
    'Tablet': '#e91e63',
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#f8f9fa',
        color: '#1a202c'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}`}</style>
        <h3 style={{ marginTop: '20px', fontSize: '20px', fontWeight: '500', color: '#1a202c' }}>Loading Analytics...</h3>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#f8f9fa',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>⚠️</div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#1a202c' }}>Error Loading Data</h2>
          <div style={{
            background: '#fee',
            color: '#c33',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            {error}
          </div>
          <button
            onClick={fetchAnalyticsData}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🔄 Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#1a202c' }}>
              📊 Analytics Dashboard
            </h1>
            <p style={{ margin: 0, color: '#718096', fontSize: '14px' }}>
              Monitor your website performance in real-time
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={{
                padding: '10px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                background: 'white'
              }}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>

            <button
              onClick={fetchAnalyticsData}
              style={{
                padding: '10px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#5568d3'}
              onMouseOut={(e) => e.currentTarget.style.background = '#667eea'}
            >
              🔄 Refresh
            </button>

            <div style={{
              padding: '8px 16px',
              background: '#f0fff4',
              border: '1px solid #9ae6b4',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#22543d',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                background: '#48bb78',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }} />
              <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; }}`}</style>
              {realtimeUsers} Online
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {[
          { label: 'Total Users', value: stats.totalUsers, icon: '👥', color: '#667eea', change: '+12.5%' },
          { label: 'Total Sessions', value: stats.totalSessions, icon: '🔄', color: '#f093fb', change: '+8.2%' },
          { label: 'Page Views', value: stats.totalPageViews, icon: '👁️', color: '#4facfe', change: '+15.3%' },
          { label: 'Bounce Rate', value: stats.bounceRate + '%', icon: '📊', color: '#fa709a', change: '-2.1%' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            flex: '1 1 calc(25% - 20px)',
            minWidth: '200px',
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ margin: '0 0 8px 0', color: '#718096', fontSize: '14px' }}>{stat.label}</p>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '32px', fontWeight: 'bold', color: '#1a202c' }}>
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                </h3>
                <span style={{
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  background: stat.change.startsWith('+') ? '#f0fff4' : '#fff5f5',
                  color: stat.change.startsWith('+') ? '#22543d' : '#c53030',
                  fontWeight: '600'
                }}>
                  {stat.change}
                </span>
              </div>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px'
              }}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        {['overview', 'devices', 'sources'].map(view => (
          <button
            key={view}
            onClick={() => setActiveView(view)}
            style={{
              padding: '12px 32px',
              background: activeView === view ? '#667eea' : 'white',
              color: activeView === view ? 'white' : '#1a202c',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              textTransform: 'capitalize',
              boxShadow: activeView === view ? '0 4px 12px rgba(102, 126, 234, 0.4)' : '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => {
              if (activeView !== view) {
                e.currentTarget.style.background = '#f7fafc'
              }
            }}
            onMouseOut={(e) => {
              if (activeView !== view) {
                e.currentTarget.style.background = 'white'
              }
            }}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Overview Data */}
      {activeView === 'overview' && (
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '22px', fontWeight: 'bold', color: '#1a202c' }}>
            📈 Traffic Overview
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f7fafc' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Date</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Users</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Sessions</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Page Views</th>
                </tr>
              </thead>
              <tbody>
                {overviewData.length > 0 ? (
                  overviewData.map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e2e8f0', transition: 'background 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#f7fafc'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                    >
                      <td style={{ padding: '16px', color: '#1a202c' }}>{new Date(row.date).toLocaleDateString()}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#667eea', fontWeight: '600' }}>{row.users.toLocaleString()}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#718096' }}>{row.sessions.toLocaleString()}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#718096' }}>{row.pageViews.toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ padding: '40px', textAlign: 'center', color: '#a0aec0' }}>
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Device Data */}
      {activeView === 'devices' && (
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '22px', fontWeight: 'bold', color: '#1a202c' }}>
            📱 Device Distribution
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {deviceData.map((device, index) => {
              const total = deviceData.reduce((sum, d) => sum + d.users, 0)
              const percentage = total > 0 ? ((device.users / total) * 100).toFixed(1) : 0
              return (
                <div key={index} style={{
                  flex: '1 1 calc(33.333% - 20px)',
                  minWidth: '250px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = deviceColors[device.device] || '#667eea'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h4 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#1a202c' }}>
                      {device.device}
                    </h4>
                    <span style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: deviceColors[device.device] || '#667eea',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {percentage}%
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#e2e8f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${percentage}%`,
                      background: `linear-gradient(90deg, ${deviceColors[device.device] || '#667eea'}, ${deviceColors[device.device] || '#667eea'}dd)`,
                      borderRadius: '10px',
                      transition: 'width 0.5s'
                    }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#a0aec0' }}>Users</p>
                      <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#1a202c' }}>
                        {device.users.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#a0aec0' }}>Sessions</p>
                      <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#1a202c' }}>
                        {device.sessions.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Source Data */}
      {activeView === 'sources' && (
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '22px', fontWeight: 'bold', color: '#1a202c' }}>
            🌐 Traffic Sources
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f7fafc' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Source</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Medium</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Users</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Sessions</th>
                </tr>
              </thead>
              <tbody>
                {sourceData.length > 0 ? (
                  sourceData.map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e2e8f0', transition: 'background 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#f7fafc'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                    >
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          padding: '6px 12px',
                          borderRadius: '6px',
                          background: '#667eea20',
                          color: '#667eea',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          {row.source}
                        </span>
                      </td>
                      <td style={{ padding: '16px', color: '#1a202c' }}>{row.medium}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#667eea', fontWeight: '600' }}>{row.users.toLocaleString()}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#718096', fontWeight: '600' }}>{row.sessions.toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ padding: '40px', textAlign: 'center', color: '#a0aec0' }}>
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Top Pages */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '22px', fontWeight: 'bold', color: '#1a202c' }}>
          🔥 Most Visited Pages
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f7fafc' }}>
                <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>#</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Page Title</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Path</th>
                <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#1a202c', borderBottom: '2px solid #e2e8f0' }}>Views</th>
              </tr>
            </thead>
            <tbody>
              {pageData.length > 0 ? (
                pageData.map((page, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e2e8f0', transition: 'background 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#f7fafc'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                  >
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        margin: '0 auto'
                      }}>
                        {index + 1}
                      </div>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '600', color: '#1a202c' }}>
                      {page.title || 'Untitled'}
                    </td>
                    <td style={{ padding: '16px', color: '#718096', fontSize: '14px' }}>
                      {page.path}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      <span style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: '#667eea',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        {page.views.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ padding: '40px', textAlign: 'center', color: '#a0aec0' }}>
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard