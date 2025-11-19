'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

interface FormData {
  name: string;
  phoneNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phoneNumber?: string;
  message?: string;
}

const HomeInspectionBanner: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResponse, setSubmitResponse] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9]{11}$/.test(formData.phoneNumber.replace(/[-\s]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitResponse('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitResponse('Thank you! Your message has been submitted successfully.');
        setFormData({ name: '', phoneNumber: '', message: '' });
      } else {
        setSubmitResponse('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitResponse('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '64px 0',
        '@media (max-width: 768px)': {
          padding: '32px 0',
        },
      }}
    >
      <Container maxWidth="xl">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {/* Left Side - Banner Content */}
          <div
            style={{
              flex: '1 1 500px',
              minWidth: '300px',
              paddingRight: '32px',
            }}
          >
            <div>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: '34px',
                  color: '#000000',
                  marginBottom: '16px',
                  '@media (max-width: 600px)': {
                    display: 'none',
                  },
                }}
              >
                1st Time in Pakistan
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: '34px',
                  color: '#000000',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                  '@media (max-width: 900px)': {
                    fontSize: '28px',
                  },
                  '@media (max-width: 600px)': {
                    display: 'none',
                  },
                }}
              >
                Mahir Home Inspection Services
              </Typography>
              
              {/* Bullet Points */}
              <Box
                component="ul"
                sx={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: '#000000',
                  paddingLeft: '20px',
                  marginTop: '20px',
                  '@media (max-width: 600px)': {
                    display: 'none',
                  },
                  '& li': {
                    marginBottom: '12px',
                    fontWeight: 500,
                  },
                }}
              >
                <li>Get Value for Money</li>
                <li>For Rented & New Houses (furnished & unfurnished)</li>
                <li>Book Before You Invest Your Life's Savings</li>
              </Box>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            style={{
              flex: '1 1 500px',
              minWidth: '300px',
              maxWidth: '600px',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: '32px',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                '@media (max-width: 768px)': {
                  padding: '24px',
                },
              }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                {/* Name and Phone Number Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ flex: '1 1 calc(50% - 8px)', minWidth: '200px' }}>
                    <TextField
                      fullWidth
                      required
                      name="name"
                      label="Name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#1976d2',
                          },
                        },
                      }}
                    />
                  </div>

                  <div style={{ flex: '1 1 calc(50% - 8px)', minWidth: '200px' }}>
                    <TextField
                      fullWidth
                      required
                      name="phoneNumber"
                      label="Phone Number"
                      placeholder="Phone number *"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      error={Boolean(errors.phoneNumber)}
                      helperText={errors.phoneNumber}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#1976d2',
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: '16px' }}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={4}
                    name="message"
                    label="Message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                      },
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '24px',
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: '#1976d2',
                      color: 'white',
                      padding: '12px 32px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '4px',
                      '&:hover': {
                        backgroundColor: '#1565c0',
                      },
                      '&:disabled': {
                        backgroundColor: '#ccc',
                      },
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>

                {/* Response Message */}
                {submitResponse && (
                  <div style={{ marginTop: '16px' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        padding: '16px',
                        borderRadius: '4px',
                        backgroundColor: submitResponse.includes('success')
                          ? '#d4edda'
                          : '#f8d7da',
                        color: submitResponse.includes('success')
                          ? '#155724'
                          : '#721c24',
                      }}
                    >
                      {submitResponse}
                    </Typography>
                  </div>
                )}
              </Box>
            </Paper>
          </div>
        </div>
      </Container>
    </Box>
  ); 
};

export default HomeInspectionBanner;