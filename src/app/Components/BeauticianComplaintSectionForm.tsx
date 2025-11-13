import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const ComplaintFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      alert("Complaint submitted successfully!");
      // Reset form
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit complaint. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f5f5f5",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 4, lg: 8 },
            alignItems: "center",
          }}
        >
          {/* Left Side - Heading */}
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 700,
                color: "#9d6370",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Resolving your complaints!
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
                color: "#9d6370",
                lineHeight: 1.6,
              }}
            >
              Leave your complaint here to help us make our services better for
              you.
            </Typography>
          </Box>

          {/* Right Side - Form */}
          <Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                p: { xs: 3, md: 4 },
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              {/* Name and Phone Fields */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                  mb: 2,
                }}
              >
                <TextField
                  fullWidth
                  name="name"
                  label="Name *"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone number *"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Box>

              {/* Message Field */}
              <TextField
                fullWidth
                name="message"
                label="Message *"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#B27381",
                  color: "#fff",
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(178, 115, 129, 0.3)",
                  "&:hover": {
                    backgroundColor: "#9d6370",
                    boxShadow: "0 6px 16px rgba(178, 115, 129, 0.4)",
                  },
                  "&:disabled": {
                    backgroundColor: "#ccc",
                  },
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ComplaintFormSection;