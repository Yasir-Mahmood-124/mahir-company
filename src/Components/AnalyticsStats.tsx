// src/Components/AnalyticsStats.tsx
'use client'

import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Stack,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  LinearProgress,
} from '@mui/material'
import {
  Refresh,
  Computer,
  PhoneAndroid,
  Tablet,
  Language,
  Pageview,
} from '@mui/icons-material'

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

const AnalyticsStats = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  const [deviceData, setDeviceData] = useState<DeviceData[]>([])
  const [sourceData, setSourceData] = useState<SourceData[]>([])
  const [pageData, setPageData] = useState<PageData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState('30d')
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    fetchAnalyticsData()
  }, [dateRange])

  const fetchAnalyticsData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const [devices, sources, pages] = await Promise.all([
        fetch(`/api/analytics?type=devices&range=${dateRange}`).then(r => r.json()),
        fetch(`/api/analytics?type=sources&range=${dateRange}`).then(r => r.json()),
        fetch(`/api/analytics?type=pages&range=${dateRange}`).then(r => r.json()),
      ])

      if (devices.error) throw new Error(devices.error)

      setDeviceData(Array.isArray(devices.data) ? devices.data : [])
      setSourceData(Array.isArray(sources.data) ? sources.data : [])
      setPageData(Array.isArray(pages.data) ? pages.data : [])
    } catch (error: any) {
      console.error('Failed to fetch analytics:', error)
      setError(error?.message || 'Failed to load analytics data')
    }
    
    setLoading(false)
  }

  const deviceIcons: { [key: string]: any } = {
    'desktop': <Computer />,
    'mobile': <PhoneAndroid />,
    'tablet': <Tablet />,
    'Desktop': <Computer />,
    'Mobile': <PhoneAndroid />,
    'Tablet': <Tablet />,
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
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '70vh', 
        flexDirection: 'column' 
      }}>
        <CircularProgress size={isMobile ? 40 : 50} />
        <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: isMobile ? '0.875rem' : 'inherit' }}>
          Loading analytics...
        </Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Container maxWidth="xl" style={{ paddingTop: isMobile ? 16 : 32, paddingBottom: isMobile ? 16 : 32 }}>
        <Alert severity="error" action={
          <IconButton color="inherit" size="small" onClick={fetchAnalyticsData}>
            <Refresh />
          </IconButton>
        }>
          {error}
        </Alert>
      </Container>
    )
  }

  return (
    <Box style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container 
        maxWidth="xl" 
        style={{ 
          paddingTop: isMobile ? 16 : 32, 
          paddingBottom: isMobile ? 16 : 32,
          paddingLeft: isMobile ? 8 : 24,
          paddingRight: isMobile ? 8 : 24,
        }}
      >
        {/* Header */}
        <Stack 
          direction={isMobile ? 'column' : 'row'} 
          justifyContent="space-between" 
          alignItems={isMobile ? 'flex-start' : 'center'} 
          spacing={isMobile ? 2 : 0}
          style={{ marginBottom: isMobile ? 16 : 32 }}
        >
          <Box>
            <Typography 
              variant={isMobile ? 'h5' : 'h4'} 
              style={{ fontWeight: 700, color: '#1a1a1a' }}
            >
              📊 Analytics Overview
            </Typography>
            <Typography 
              variant="body2" 
              style={{ 
                color: '#666', 
                marginTop: 4,
                fontSize: isMobile ? '0.75rem' : 'inherit' 
              }}
            >
              Devices, Sources & Popular Pages
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={{
                padding: isMobile ? '8px 12px' : '10px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: isMobile ? '12px' : '14px',
                cursor: 'pointer',
                background: 'white'
              }}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>

            <IconButton
              color="primary"
              onClick={fetchAnalyticsData}
              size={isMobile ? 'small' : 'medium'}
              style={{ backgroundColor: 'white' }}
            >
              <Refresh />
            </IconButton>
          </Stack>
        </Stack>

        {/* Tabs */}
        <Paper style={{ marginBottom: isMobile ? 16 : 24 }}>
          <Tabs 
            value={activeTab} 
            onChange={(_, newValue) => setActiveTab(newValue)}
            variant={isMobile ? 'fullWidth' : 'standard'}
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                fontSize: isMobile ? '0.75rem' : '0.875rem',
                minHeight: isMobile ? '48px' : '64px',
              }
            }}
          >
            <Tab 
              icon={<Computer fontSize={isMobile ? 'small' : 'medium'} />} 
              label="Devices" 
              iconPosition="start"
            />
            <Tab 
              icon={<Language fontSize={isMobile ? 'small' : 'medium'} />} 
              label="Sources" 
              iconPosition="start"
            />
            <Tab 
              icon={<Pageview fontSize={isMobile ? 'small' : 'medium'} />} 
              label="Pages" 
              iconPosition="start"
            />
          </Tabs>
        </Paper>

        {/* Devices Tab */}
        {activeTab === 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : isTablet 
              ? 'repeat(2, 1fr)' 
              : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px',
          }}>
            {deviceData.length > 0 ? (
              deviceData.map((device, index) => {
                const total = deviceData.reduce((sum, d) => sum + d.users, 0)
                const percentage = total > 0 ? ((device.users / total) * 100).toFixed(1) : '0'
                return (
                  <Card 
                    key={index}
                    style={{
                      border: `2px solid ${deviceColors[device.device] || '#667eea'}`,
                      borderRadius: '16px',
                    }}
                  >
                    <CardContent style={{ padding: isMobile ? '16px' : '24px' }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <Box 
                          style={{
                            width: isMobile ? '48px' : '64px',
                            height: isMobile ? '48px' : '64px',
                            borderRadius: '12px',
                            backgroundColor: `${deviceColors[device.device]}20`,
                            color: deviceColors[device.device],
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: isMobile ? '24px' : '32px'
                          }}
                        >
                          {deviceIcons[device.device] || <Computer />}
                        </Box>
                        <Box flex={1}>
                          <Typography 
                            variant={isMobile ? 'h6' : 'h5'} 
                            style={{ fontWeight: 700, textTransform: 'capitalize' }}
                          >
                            {device.device}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {percentage}% of traffic
                          </Typography>
                        </Box>
                      </Stack>

                      <LinearProgress 
                        variant="determinate" 
                        value={Number(percentage)} 
                        sx={{ 
                          mt: 2, 
                          mb: 2, 
                          height: isMobile ? 6 : 8,
                          borderRadius: 4,
                          backgroundColor: '#e2e8f0',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: deviceColors[device.device],
                          }
                        }}
                      />

                      <Stack direction="row" justifyContent="space-between">
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            Users
                          </Typography>
                          <Typography variant={isMobile ? 'h6' : 'h5'} style={{ fontWeight: 700 }}>
                            {device.users.toLocaleString()}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            Sessions
                          </Typography>
                          <Typography variant={isMobile ? 'h6' : 'h5'} style={{ fontWeight: 700 }}>
                            {device.sessions.toLocaleString()}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                )
              })
            ) : (
              <Box style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px' }}>
                <Computer style={{ fontSize: 64, color: '#ccc', marginBottom: 16 }} />
                <Typography variant="h6" color="text.secondary">
                  No device data available
                </Typography>
              </Box>
            )}
          </div>
        )}

        {/* Sources Tab */}
        {activeTab === 1 && (
          <Paper style={{ padding: isMobile ? 16 : 24 }}>
            <Typography 
              variant={isMobile ? 'h6' : 'h5'} 
              style={{ fontWeight: 700, marginBottom: isMobile ? 16 : 24 }}
            >
              🌐 Traffic Sources
            </Typography>
            <div style={{ overflowX: 'auto' }}>
              <TableContainer>
                <Table size={isMobile ? 'small' : 'medium'}>
                  <TableHead>
                    <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                      {!isMobile && (
                        <TableCell style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                          #
                        </TableCell>
                      )}
                      <TableCell style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                        Source
                      </TableCell>
                      {!isMobile && (
                        <TableCell style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                          Medium
                        </TableCell>
                      )}
                      <TableCell align="right" style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                        Users
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                        Sessions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sourceData.length > 0 ? (
                      sourceData.map((row, index) => (
                        <TableRow 
                          key={index}
                          sx={{ 
                            '&:hover': { backgroundColor: '#fafafa' },
                            cursor: 'pointer'
                          }}
                        >
                          {!isMobile && (
                            <TableCell>
                              <Typography variant="body2" style={{ fontWeight: 600, color: '#666' }}>
                                {index + 1}
                              </Typography>
                            </TableCell>
                          )}
                          <TableCell>
                            <Typography variant="body2" style={{ fontWeight: 600, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                              {row.source}
                            </Typography>
                            {isMobile && (
                              <Typography variant="caption" color="text.secondary">
                                {row.medium}
                              </Typography>
                            )}
                          </TableCell>
                          {!isMobile && (
                            <TableCell>
                              <Typography variant="body2" color="text.secondary">
                                {row.medium}
                              </Typography>
                            </TableCell>
                          )}
                          <TableCell align="right">
                            <Typography 
                              variant="body2" 
                              style={{ 
                                fontWeight: 600, 
                                color: '#1976d2',
                                fontSize: isMobile ? '0.75rem' : 'inherit'
                              }}
                            >
                              {row.users.toLocaleString()}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography 
                              variant="body2" 
                              color="text.secondary"
                              style={{ fontSize: isMobile ? '0.75rem' : 'inherit' }}
                            >
                              {row.sessions.toLocaleString()}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={isMobile ? 3 : 5} align="center" style={{ padding: '48px' }}>
                          <Language style={{ fontSize: 64, color: '#ccc', marginBottom: 16 }} />
                          <Typography variant="body1" color="text.secondary">
                            No source data available
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Paper>
        )}

        {/* Pages Tab */}
        {activeTab === 2 && (
          <Paper style={{ padding: isMobile ? 16 : 24 }}>
            <Typography 
              variant={isMobile ? 'h6' : 'h5'} 
              style={{ fontWeight: 700, marginBottom: isMobile ? 16 : 24 }}
            >
              🔥 Most Visited Pages
            </Typography>
            <div style={{ overflowX: 'auto' }}>
              <TableContainer>
                <Table size={isMobile ? 'small' : 'medium'}>
                  <TableHead>
                    <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                      <TableCell align="center" style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                        #
                      </TableCell>
                      <TableCell style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                        Page Title
                      </TableCell>
                      {!isMobile && (
                        <TableCell style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                          Path
                        </TableCell>
                      )}
                      <TableCell align="right" style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : 'inherit' }}>
                        Views
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pageData.length > 0 ? (
                      pageData.map((page, index) => (
                        <TableRow 
                          key={index}
                          sx={{ 
                            '&:hover': { backgroundColor: '#fafafa' },
                            cursor: 'pointer'
                          }}
                        >
                          <TableCell align="center">
                            <Box
                              style={{
                                width: isMobile ? '28px' : '36px',
                                height: isMobile ? '28px' : '36px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                margin: '0 auto',
                                fontSize: isMobile ? '0.75rem' : '0.875rem'
                              }}
                            >
                              {index + 1}
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography 
                              variant="body2" 
                              style={{ 
                                fontWeight: 600,
                                fontSize: isMobile ? '0.75rem' : 'inherit'
                              }}
                            >
                              {page.title || 'Untitled'}
                            </Typography>
                            {isMobile && (
                              <Typography variant="caption" color="text.secondary">
                                {page.path}
                              </Typography>
                            )}
                          </TableCell>
                          {!isMobile && (
                            <TableCell>
                              <Typography variant="body2" color="text.secondary" style={{ fontSize: '0.875rem' }}>
                                {page.path}
                              </Typography>
                            </TableCell>
                          )}
                          <TableCell align="right">
                            <Box
                              style={{
                                display: 'inline-block',
                                padding: isMobile ? '4px 8px' : '6px 12px',
                                borderRadius: '6px',
                                background: '#667eea',
                                color: 'white',
                                fontSize: isMobile ? '0.7rem' : '0.875rem',
                                fontWeight: 600
                              }}
                            >
                              {page.views.toLocaleString()}
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={isMobile ? 3 : 4} align="center" style={{ padding: '48px' }}>
                          <Pageview style={{ fontSize: 64, color: '#ccc', marginBottom: 16 }} />
                          <Typography variant="body1" color="text.secondary">
                            No page data available
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Paper>
        )}
      </Container>
    </Box>
  )
}

export default AnalyticsStats