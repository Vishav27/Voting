import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Paper,
  Container,
} from '@mui/material';
import loginpagebg from '../assets/loginpagebg.jpg'; // Import the background image

const LoginPage = () => {
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('voter');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [error, setError] = useState('');

  const handleMobileSubmit = () => {
    if (!mobile || mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    // Mock OTP generation
    setShowOtpField(true);
    setError('');
  };

  const handleOtpSubmit = () => {
    if (otp !== '123456') { // Mock OTP verification
      setError('Invalid OTP. Please try again.');
      return;
    }
    setError('');
    // Redirect based on role
    if (role === 'voter') {
      window.location.href = '/voter-dashboard';
    } else {
      window.location.href = '/officer-dashboard';
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${loginpagebg})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire page
        backgroundPosition: 'center', // Center the image
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column', // Ensure the content is placed correctly
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          pt: 10, // Add padding to move the card down
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          minHeight: '100vh',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '35%', // Cover 35% of the screen width
            maxWidth: '500px', // Optional: to limit the maximum width of the card
            height: 'auto', // Adjust to content size
            minHeight: '75vh', // Increase the height of the login card
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
            backdropFilter: 'blur(5px)', // Blur effect
            borderRadius: 0, // Remove rounded corners
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Space between login fields and boxes
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            India's Online Voting Platform
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Welcome! Please log in to continue.
          </Typography>

          {/* Role Selection */}
          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
            sx={{ justifyContent: 'center', mb: 3 }}
          >
            <FormControlLabel value="voter" control={<Radio />} label="Voter" />
            <FormControlLabel value="officer" control={<Radio />} label="Voting Officer" />
          </RadioGroup>

          {/* Mobile Number Input */}
          {!showOtpField ? (
            <>
              <TextField
                label="Mobile Number"
                variant="outlined"
                fullWidth
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                sx={{ mb: 3 }}
                inputProps={{ maxLength: 10 }}
              />
              <Button
                variant="contained"
                onClick={handleMobileSubmit}
                fullWidth
                sx={{ py: 1.5, fontWeight: 'bold' }}
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <TextField
                label="Enter OTP"
                variant="outlined"
                fullWidth
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                sx={{ mb: 3 }}
                inputProps={{ maxLength: 6 }}
              />
              <Button
                variant="contained"
                onClick={handleOtpSubmit}
                fullWidth
                sx={{ py: 1.5, fontWeight: 'bold' }}
              >
                Submit OTP
              </Button>
            </>
          )}

          {/* Error Message */}
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {/* Information Boxes inside the login card */}
          <Box sx={{ mt: 3 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: '#1976d2',
                color: 'white',
                textAlign: 'center',
                borderRadius: 2,
                mb: 2,
              }}
            >
              <Typography variant="h6">Secure</Typography>
              <Typography variant="body2">
                Secure voting with advanced encryption and blockchain technology
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: '#1976d2',
                color: 'white',
                textAlign: 'center',
                borderRadius: 2,
                mb: 2,
              }}
            >
              <Typography variant="h6">Transparent</Typography>
              <Typography variant="body2">
                Audit trail to ensure transparency throughout the process
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: '#1976d2',
                color: 'white',
                textAlign: 'center',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">Accessible</Typography>
              <Typography variant="body2">
                Vote from anywhere, on any device, anytime
              </Typography>
            </Paper>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
