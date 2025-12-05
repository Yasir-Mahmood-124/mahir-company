
import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Card,
  CardContent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';

interface Package {
  title: string;
  regularPrice: number;
  discountedPrice: number;
  duration: string;
  rating: number;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  city: string;
  comment: string;
  package: string;
}

const packages: Package[] = [
  { title: '3 to 5 Marlas', regularPrice: 4000, discountedPrice: 2999, duration: '4 Months', rating: 4.9 },
  { title: '7 to 10 Marlas', regularPrice: 5200, discountedPrice: 3999, duration: '6 Months', rating: 4.9 },
  { title: '1 Kanal', regularPrice: 7000, discountedPrice: 4999, duration: '6 Months', rating: 4.9 },
  { title: '2 Kanals', regularPrice: 10000, discountedPrice: 6999, duration: '6 Months', rating: 4.9 }
];

export default function MahirPackages() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    city: 'Lahore',
    comment: '',
    package: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Simple black & white theme
  const theme = createTheme({
    palette: {
      mode: 'light',
      background: { default: '#f5f5f5', paper: '#ffffff' },
      text: { primary: '#000000' }
    }
  });

  const handleOpenModal = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    setFormData(prev => ({ ...prev, package: packageTitle }));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({ name: '', phone: '', address: '', city: 'Lahore', comment: '', package: '' });
    setErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const mobileRegex = /^03[0-9]{9}$/;
    const landlineRegex = /^(0[1-9][0-9])([0-9]{7,8})$/;
    return phone.length === 11 && (mobileRegex.test(phone) || landlineRegex.test(phone));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (formData.name.length < 3) newErrors.name = 'Name must be at least 3 characters';
    if (!validatePhoneNumber(formData.phone)) newErrors.phone = 'Invalid Pakistani phone number (must be 11 digits)';
    if (formData.address.trim().split(/\s+/).length < 3) newErrors.address = 'Address must contain at least 3 words';
    if (formData.comment.trim().split(/\s+/).length < 3) newErrors.comment = 'Comment must contain at least 3 words';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      handleCloseModal();
    }
  };

  const isFormValid = () => {
    return (
      formData.name.length >= 3 &&
      validatePhoneNumber(formData.phone) &&
      formData.address.trim().split(/\s+/).length >= 3 &&
      formData.comment.trim().split(/\s+/).length >= 3
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: '100vh', py: 6, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
            Packages
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Choose from our wide range of packages
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3
            }}
          >
            {packages.map(pkg => (
              <Card
                key={pkg.title}
                onClick={() => handleOpenModal(pkg.title)}
                sx={{
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                  bgcolor: '#000000', // ALWAYS BLACK
                  color: '#ffffff'     // TEXT WHITE
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {pkg.title}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography sx={{ textDecoration: 'line-through', color: '#ff4d4d' }}>
                      Rs {pkg.regularPrice}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                      Rs {pkg.discountedPrice}
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {pkg.duration}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bgcolor: '#ffffff',
                      color: '#000000',
                      py: 0.5,
                      px: 2,
                      borderRadius: 2,
                      fontWeight: 'bold'
                    }}
                  >
                    <StarIcon sx={{ mr: 0.5 }} />
                    {pkg.rating}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>

        <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">{selectedPackage}</Typography>
            <IconButton onClick={handleCloseModal} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField fullWidth required label="Name" name="name" value={formData.name} onChange={handleInputChange} error={!!errors.name} helperText={errors.name} sx={{ mb: 3 }} />
              <TextField fullWidth required label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} error={!!errors.phone} helperText={errors.phone} sx={{ mb: 3 }} />
              <TextField fullWidth required label="Address" name="address" value={formData.address} onChange={handleInputChange} error={!!errors.address} helperText={errors.address} sx={{ mb: 3 }} />
              <TextField fullWidth label="Package" value={formData.package} disabled sx={{ mb: 3 }} />
              <TextField fullWidth label="City" value={formData.city} disabled sx={{ mb: 3 }} />
              <TextField fullWidth required multiline rows={4} label="Comment" name="comment" value={formData.comment} onChange={handleInputChange} error={!!errors.comment} helperText={errors.comment} sx={{ mb: 3 }} />

              <Button type="submit" variant="contained" fullWidth size="large" disabled={!isFormValid()} sx={{ py: 1.5, fontSize: '1rem', fontWeight: 'bold', bgcolor: '#000', '&:hover': { bgcolor: '#333' } }}>
                Submit
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}
