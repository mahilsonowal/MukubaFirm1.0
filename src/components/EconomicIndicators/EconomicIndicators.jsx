import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Box, Paper, CircularProgress, Button, Grid, Link, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import GDPDetailView from './GDPDetailView';

const EconomicIndicators = () => {
  const [rates, setRates] = useState({});
  const [gdpData, setGdpData] = useState({});
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [exchangeRateData, setExchangeRateData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const containerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const trackedCountries = [
    { 
      code: "ZMW", 
      name: "Zambia", 
      iso3: "ZMB", 
      color: "primary.light",
      symbol: "K",
      currencyName: "Zambian Kwacha"
    },
    { 
      code: "INR", 
      name: "India", 
      iso3: "IND", 
      color: "success.light",
      symbol: "₹",
      currencyName: "Indian Rupee"
    },
    { 
      code: "USD", 
      name: "USA", 
      iso3: "USA", 
      color: "error.light",
      symbol: "$",
      currencyName: "US Dollar"
    },
    { 
      code: "CNY", 
      name: "China", 
      iso3: "CHN", 
      color: "warning.light",
      symbol: "¥",
      currencyName: "Chinese Yuan"
    },
    { 
      code: "RUB", 
      name: "Russia", 
      iso3: "RUS", 
      color: "secondary.light",
      symbol: "₽",
      currencyName: "Russian Ruble"
    }
  ];

  const formatGDP = (value) => {
    if (!value) return 'N/A';
    
    const trillion = 1000000000000;
    const billion = 1000000000;
    
    if (value >= trillion) {
      return `${(value / trillion).toFixed(2)}T`;
    } else if (value >= billion) {
      return `${(value / billion).toFixed(2)}B`;
    } else {
      return `${value.toFixed(2)}M`;
    }
  };

  const formatGrowth = (value) => {
    if (value === null || value === undefined || isNaN(value)) return 'N/A';
    return `${Number(value).toFixed(2)}%`;
  };

  const formatExchangeRate = (rate, country) => {
    if (!rate) return '-';
    return `${country.symbol} ${rate.toFixed(2)}`;
  };

  const fetchExchangeRates = async () => {
    try {
      const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
      if (!apiKey) {
        throw new Error('Exchange Rate API key not found');
      }

      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );
      
      if (response.data && response.data.conversion_rates) {
        const ratesData = {};
        const exchangeData = {};
        const currentDate = new Date().toLocaleDateString();
        
        trackedCountries.forEach(country => {
          const rate = response.data.conversion_rates[country.code];
          ratesData[country.code] = rate;
          
          // Calculate exchange rate data
          exchangeData[country.code] = {
            rate: `${country.symbol}${rate?.toFixed(2) || 'N/A'}`,
            date: currentDate,
            change: '0.00%', // You might want to calculate this based on historical data
            changeDate: currentDate
          };
        });
        
        setRates(ratesData);
        setExchangeRateData(exchangeData);
        return ratesData;
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      // Fallback to World Bank data if ExchangeRate-API fails
      await fetchWorldBankRates();
    }
  };

  const fetchWorldBankRates = async () => {
    try {
      const response = await axios.get(
        'https://api.worldbank.org/v2/country/all/indicator/PA.NUS.FCRF?format=json&mrv=1&per_page=1000'
      );
      
      const ratesData = {};
      const exchangeData = {};
      const currentDate = new Date().toLocaleDateString();
      
      ratesData['USD'] = 1;
      exchangeData['USD'] = {
        rate: '$1.00',
        date: currentDate,
        change: '0.00%',
        changeDate: currentDate
      };
      
      if (response.data && response.data[1]) {
        response.data[1].forEach(item => {
          if (item.country && item.value) {
            const countryCode = item.country.id;
            const country = trackedCountries.find(c => c.iso3 === countryCode);
            
            if (country) {
              ratesData[country.code] = item.value;
              exchangeData[country.code] = {
                rate: `${country.symbol}${item.value?.toFixed(2) || 'N/A'}`,
                date: item.date || currentDate,
                change: '0.00%',
                changeDate: currentDate
              };
            }
          }
        });
      }
      
      setRates(ratesData);
      setExchangeRateData(exchangeData);
      return ratesData;
    } catch (error) {
      console.error('Error fetching World Bank rates:', error);
      return null;
    }
  };

  const fetchGDPData = async () => {
    try {
      const gdpPromises = trackedCountries.map(async (country) => {
        // Fetch GDP value
        const gdpResponse = await axios.get(
          `https://api.worldbank.org/v2/country/${country.iso3}/indicator/NY.GDP.MKTP.CD?format=json&mrv=1`
        );
        
        // Fetch GDP growth
        const growthResponse = await axios.get(
          `https://api.worldbank.org/v2/country/${country.iso3}/indicator/NY.GDP.MKTP.KD.ZG?format=json&mrv=1`
        );

        const gdpValue = gdpResponse.data[1]?.[0]?.value;
        const gdpYear = gdpResponse.data[1]?.[0]?.date;
        const growthValue = growthResponse.data[1]?.[0]?.value;
        const growthYear = growthResponse.data[1]?.[0]?.date;

        return {
          code: country.code,
          gdp: formatGDP(gdpValue),
          gdpYear: gdpYear || 'N/A',
          growth: formatGrowth(growthValue),
          growthYear: growthYear || 'N/A'
        };
      });

      const results = await Promise.all(gdpPromises);
      const gdpDataMap = {};
      results.forEach(result => {
        gdpDataMap[result.code] = result;
      });
      
      setGdpData(gdpDataMap);
      return gdpDataMap;
    } catch (error) {
      console.error('Error fetching GDP data:', error);
      return null;
    }
  };

  const fetchAllEconomicData = async () => {
    setLoading(true);
    try {
      await Promise.all([
        fetchExchangeRates(),
        fetchGDPData()
      ]);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching economic data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEconomicData();
    // Refresh data every 6 hours in a real application
    const interval = setInterval(fetchAllEconomicData, 6 * 3600000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Auto-rotate indicators
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === trackedCountries.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? trackedCountries.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === trackedCountries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50; // Minimum distance for swipe

    if (isSwipe) {
      if (distance > 0) {
        // Swipe left
        setCurrentIndex((prevIndex) => 
          prevIndex === trackedCountries.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        // Swipe right
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? trackedCountries.length - 1 : prevIndex - 1
        );
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUpIcon sx={{ color: '#4CAF50' }} />;
      case 'down':
        return <TrendingDownIcon sx={{ color: '#F44336' }} />;
      default:
        return <TrendingFlatIcon sx={{ color: '#FFC107' }} />;
    }
  };

  const handleGDPClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackFromDetail = () => {
    setSelectedCountry(null);
  };

  if (selectedCountry) {
    return <GDPDetailView country={selectedCountry} onBack={handleBackFromDetail} />;
  }

  return (
    <Box sx={{ 
      py: { xs: 4, md: 8 }, 
      bgcolor: '#f5f5f5',
      minHeight: { xs: '100vh', md: 'auto' }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 3, md: 5 },
          px: { xs: 2, md: 0 }
        }}>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              color: '#C9AA74', 
              fontWeight: 600, 
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 1,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Economic Indicators
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              lineHeight: 1.2
            }}
          >
            Exchange Rates & GDP Updates
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary', 
              maxWidth: '700px', 
              mx: 'auto',
              mb: 2,
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}
          >
            Stay informed with real-time exchange rates and GDP data for major economies
          </Typography>
          {lastUpdated && (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
            >
              Last updated: {lastUpdated.toLocaleTimeString()}
            </Typography>
          )}
  <Typography
    variant="caption"
    color="text.secondary"
    sx={{ fontSize: { xs: '0.7rem', md: '0.75rem' } }}
  >
    Data source:
  </Typography>
  <Button
    href="https://www.worldbank.org"
    target="_blank"
    rel="noopener noreferrer"
    size="small"
    sx={{
      fontSize: { xs: '0.7rem', md: '0.75rem' },
      textTransform: 'none',
      padding: 0,
      minWidth: 'auto',
      color: 'green',
    }}
  >
    World Bank
  </Button>
        </Box>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Box 
            ref={containerRef}
            sx={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '850px', 
              mx: 'auto',
              px: { xs: 2, md: 0 }
            }}
          >
            <Box 
              sx={{ 
                position: 'relative', 
                overflow: 'hidden', 
                height: { xs: '320px', md: '380px' },
                touchAction: 'pan-y pinch-zoom'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {trackedCountries.map((country, index) => (
                <Paper
                  key={country.code}
                  elevation={3}
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    p: { xs: 2, md: 4 },
                    borderLeft: 5,
                    borderColor: country.color,
                    borderRadius: 2,
                    bgcolor: 'white',
                    transition: 'all 0.5s ease-in-out',
                    opacity: index === currentIndex ? 1 : 0,
                    transform: index === currentIndex 
                      ? 'translateX(0)' 
                      : index < currentIndex 
                        ? 'translateX(-100%)' 
                        : 'translateX(100%)',
                    zIndex: index === currentIndex ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <Typography 
                    variant="h4" 
                    component="h3" 
                    gutterBottom 
                    fontWeight={700}
                    sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                  >
                    {country.name}
                  </Typography>
                  
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      mb: 1, 
                      fontWeight: 700,
                      fontSize: { xs: '1.75rem', md: '3rem' },
                      textAlign: 'center'
                    }}
                  >
                    {formatExchangeRate(rates[country.code], country)}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                  >
                    {country.currencyName}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    mb={3}
                    sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                  >
                    1 USD = {country.symbol} {rates[country.code]?.toFixed(2) || '-'}
                  </Typography>
                  
                  <Box 
                    sx={{ 
                      width: '100%', 
                      maxWidth: '500px', 
                      borderTop: '1px solid #eee', 
                      pt: 3, 
                      mt: 2 
                    }}
                  >
                    <Grid 
                      container 
                      spacing={5}
                      justifyContent="center"
                    >
                      <Grid 
                        column={6}
                        sx={{ 
                          textAlign: 'center',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            borderRadius: 1
                          }
                        }}
                        onClick={() => handleGDPClick(trackedCountries[currentIndex])}
                      >
                        <Typography 
                          variant="h6"
                          sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                        >
                          GDP
                        </Typography>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontWeight: 700,
                            fontSize: { xs: '1.25rem', md: '2rem' } 
                          }}
                        >
                          {gdpData[country.code]?.gdp || 'N/A'}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                        >
                          ({gdpData[country.code]?.gdpYear || 'N/A'})
                        </Typography>
                      </Grid>
                      <Grid 
                        column={6}
                        sx={{ 
                          textAlign: 'center',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            borderRadius: 1
                          }
                        }}
                        onClick={() => handleGDPClick(trackedCountries[currentIndex])}
                      >
                        <Typography 
                          variant="h6"
                          sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                        >
                          Growth
                        </Typography>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontWeight: 700,
                            fontSize: { xs: '1.25rem', md: '2rem' },
                            color: gdpData[country.code]?.growth?.includes('-') ? 'error.main' : 'success.main'
                          }}
                        >
                          {gdpData[country.code]?.growth || 'N/A'}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                        >
                          ({gdpData[country.code]?.growthYear || 'N/A'})
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              ))}
            </Box>
            
            {/* Navigation Dots */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mt: 3, 
                gap: 1,
                px: { xs: 2, md: 0 }
              }}
            >
              {trackedCountries.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleDotClick(index)}
                  sx={{
                    width: index === currentIndex ? 24 : 12,
                    height: 12,
                    borderRadius: 6,
                    bgcolor: index === currentIndex ? '#C9AA74' : '#e0e0e0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: index === currentIndex ? '#C9AA74' : '#bdbdbd'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EconomicIndicators;