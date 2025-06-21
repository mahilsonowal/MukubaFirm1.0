import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  CircularProgress,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GDPDetailView = ({ country, onBack }) => {
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchHistoricalData = async () => {
      setLoading(true);
      try {
        // Fetch last 10 years of GDP data
        const gdpResponse = await axios.get(
          `https://api.worldbank.org/v2/country/${country.iso3}/indicator/NY.GDP.MKTP.CD?format=json&per_page=10&sort=desc`
        );
        
        // Fetch last 10 years of GDP growth data
        const growthResponse = await axios.get(
          `https://api.worldbank.org/v2/country/${country.iso3}/indicator/NY.GDP.MKTP.KD.ZG?format=json&per_page=10&sort=desc`
        );

        if (gdpResponse.data && growthResponse.data) {
          const gdpData = gdpResponse.data[1] || [];
          const growthData = growthResponse.data[1] || [];

          setHistoricalData({
            gdp: gdpData,
            growth: growthData
          });
        }
      } catch (error) {
        console.error('Error fetching historical data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, [country.iso3]);

  const formatGDPValue = (value) => {
    if (!value) return 0;
    const trillion = 1000000000000;
    const billion = 1000000000;
    
    if (value >= trillion) {
      return (value / trillion).toFixed(2);
    } else if (value >= billion) {
      return (value / billion).toFixed(2);
    } else {
      return (value / 1000000).toFixed(2);
    }
  };

  const prepareChartData = () => {
    if (!historicalData) return null;

    const years = historicalData.gdp.map(item => item.date).reverse();
    const gdpValues = historicalData.gdp.map(item => formatGDPValue(item.value)).reverse();
    const growthValues = historicalData.growth.map(item => item.value || 0).reverse();

    return {
      labels: years,
      datasets: [
        {
          label: 'GDP (in Billions USD)',
          data: gdpValues,
          borderColor: '#C9AA74',
          backgroundColor: 'rgba(201, 170, 116, 0.1)',
          tension: 0.4,
          yAxisID: 'y',
          borderWidth: isMobile ? 2 : 3,
          pointRadius: isMobile ? 2 : 3,
          pointHoverRadius: isMobile ? 4 : 6,
        },
        {
          label: 'GDP Growth (%)',
          data: growthValues,
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          tension: 0.4,
          yAxisID: 'y1',
          borderWidth: isMobile ? 2 : 3,
          pointRadius: isMobile ? 2 : 3,
          pointHoverRadius: isMobile ? 4 : 6,
        }
      ]
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: isMobile ? 'bottom' : 'top',
        labels: {
          boxWidth: isMobile ? 12 : 15,
          padding: isMobile ? 10 : 15,
          font: {
            size: isMobile ? 11 : 14
          }
        }
      },
      title: {
        display: true,
        text: `${country.name} - GDP and Growth Trends (Last 10 Years)`,
        font: {
          size: isMobile ? 14 : isTablet ? 16 : 20,
          weight: 'bold'
        },
        padding: {
          top: isMobile ? 10 : 20,
          bottom: isMobile ? 10 : 20
        }
      },
      tooltip: {
        titleFont: {
          size: isMobile ? 12 : 14
        },
        bodyFont: {
          size: isMobile ? 11 : 13
        },
        padding: isMobile ? 8 : 12,
        boxWidth: isMobile ? 100 : 120,
        boxHeight: isMobile ? 60 : 80,
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: isMobile ? 10 : 12
          },
          maxRotation: isMobile ? 45 : 0,
          minRotation: isMobile ? 45 : 0
        },
        grid: {
          display: !isMobile
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'GDP (Billions USD)',
          font: {
            size: isMobile ? 11 : 13
          }
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 12
          }
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Growth Rate (%)',
          font: {
            size: isMobile ? 11 : 13
          }
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 12
          }
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <Box sx={{ 
      py: { xs: 2, sm: 4, md: 8 }, 
      px: { xs: 1, sm: 2, md: 3 },
      bgcolor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
        <Box sx={{ 
          mb: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1, sm: 2 }
        }}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <IconButton 
                onClick={onBack}
                sx={{ 
                  color: '#C9AA74',
                  p: { xs: 1, sm: 1.5 },
                  '&:hover': {
                    backgroundColor: 'rgba(201, 170, 116, 0.1)'
                  }
                }}
              >
                <ArrowBackIcon sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Typography 
                variant="h4" 
                component="h1" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { 
                    xs: '1.25rem', 
                    sm: '1.5rem', 
                    md: '2rem' 
                  },
                  lineHeight: 1.2
                }}
              >
                {country.name} Economic Analysis
              </Typography>
            </Grid>
          </Grid>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: '0.875rem', sm: '1rem' },
              mt: { xs: 1, sm: 1.5 }
            }}
          >
            Detailed view of GDP and growth trends over the past decade
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            py: { xs: 4, sm: 6 },
            px: { xs: 1, sm: 2 }
          }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Paper 
            elevation={3}
            sx={{ 
              p: { xs: 1.5, sm: 2, md: 4 },
              borderRadius: 2,
              bgcolor: 'white',
              mx: { xs: 0.5, sm: 1 }
            }}
          >
            {historicalData && (
              <Box sx={{ 
                height: { 
                  xs: '250px', 
                  sm: '350px', 
                  md: '500px' 
                },
                width: '100%',
                position: 'relative'
              }}>
                <Line 
                  data={prepareChartData()} 
                  options={chartOptions}
                />
              </Box>
            )}
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default GDPDetailView; 