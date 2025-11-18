"use client"
import { Box, Container, Typography, Link, TextField, Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Image from 'next/image';
import Logoes from "../assests/Images/logofooter.png"

const Footer = () => {
  return (
    <Box>
      {/* Main Footer Section - Black BG */}
      <Box sx={{ bgcolor: '#000', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {/* About Us */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(25% - 24px)' } }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                About us
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Ustad on Call Company is your go-to on-demand expert for all your Home & Personal Care needs. We are serving you 24/7 since 2019. Now as UstadonCall Company, we are offering more accessible, reliable, fast, safe, and pocket-friendly services to you.
              </Typography>
            </Box>

            {/* Main Services */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(25% - 24px)' } }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Main Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  'Home Services', 'Cleaning Services', 'Personal Care', 'Maintained by Ustad On Call',
                  'Contact Us', 'FAQs', 'About Us', 'Term & Conditions', 'Privacy Policy', 'Blogs'
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    underline="hover"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: 14,
                      '&:hover': { color: 'white' },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Connect with us */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(25% - 24px)' } }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Connect with us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="tel:03096661919" underline="none" sx={{ display: 'flex', alignItems: 'center', color: 'white', gap: 1 }}>
                  <Box sx={{
                    bgcolor: 'white',
                    borderRadius: '6px',
                    width: 28,
                    height: 28,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.4 11.4 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.56 1 1 0 01-.27 1.11z"/></svg>
                  </Box>
                  0309 6661919
                </Link>
                {[
                  { icon: <TwitterIcon sx={{ color: 'black' }} />, name: 'Twitter', href: '#' },
                  { icon: <LinkedInIcon sx={{ color: 'black' }} />, name: 'Linkedin', href: '#' },
                  { icon: <PinterestIcon sx={{ color: 'black' }} />, name: 'Pinterest', href: '#' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="black" viewBox="0 0 24 24"><path d="M10 15l5-3-5-3v6z"/><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>, name: 'Youtube', href: '#' },
                  { icon: <InstagramIcon sx={{ color: 'black' }} />, name: 'Instagram', href: '#' },
                  { icon: <FacebookIcon sx={{ color: 'black' }} />, name: 'Facebook', href: '#' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="black" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM14.9 12.85a2.3 2.3 0 11-2.3-2.3 2.3 2.3 0 012.3 2.3z"/></svg>, name: 'Tiktok', href: '#' },
                ].map(({ icon, name, href }, i) => (
                  <Link key={i} href={href} underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.7)', fontSize: 14, '&:hover': { color: 'white' } }}>
                    <Box sx={{
                      bgcolor: 'white',
                      borderRadius: '6px',
                      width: 28,
                      height: 28,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'black',
                    }}>
                      {icon}
                    </Box>
                    {name}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Newsletter */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(25% - 24px)' } }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                News Letter
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                We dont spam you.
              </Typography>
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                size="small"
                sx={{
                  mb: 2,
                  bgcolor: 'white',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'black',
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.3)',
                    },
                  },
                }}
              />
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  startIcon={<AppleIcon sx={{ color: 'black' }} />}
                  sx={{
                    color: 'black',
                    bgcolor: 'white',
                    borderColor: 'white',
                    textTransform: 'none',
                    fontSize: 12,
                    borderRadius: 1,
                    px: 1.5,
                    py: 0.5,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                      borderColor: 'white',
                    },
                  }}
                >
                  App Store
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<AndroidIcon sx={{ color: 'black' }} />}
                  sx={{
                    color: 'black',
                    bgcolor: 'white',
                    borderColor: 'white',
                    textTransform: 'none',
                    fontSize: 12,
                    borderRadius: 1,
                    px: 1.5,
                    py: 0.5,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                      borderColor: 'white',
                    },
                  }}
                >
                  Google Play
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Bottom copyright section - White BG */}
      <Box sx={{
        bgcolor: 'white',
        color: '#777',
        py: 2,
        px: 3,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        borderTop: '1px solid #ddd',
      }}>
        <Typography variant="body2" sx={{ fontSize: 13, textAlign: { xs: 'center', sm: 'left' } }}>
          © Copyright 2022 UstadonCall.com (pvt) Ltd
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Logo */}
          <Image
            src={Logoes}
            alt="Ustad on Call Logo"
            width={120}
            height={30}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;