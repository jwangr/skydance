"use client";

import { useState } from "react";

import { Box, ListItemText, Stack } from "@mui/material";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Alert,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SnapScrollSection from "@/components/SnapScrollSection";
import { GOOGLE_SCRIPT_URL } from "@/lib/googleScript";
import { darkFieldSx, formContainerSx } from "./FormComponentStyles";
import { CakeOutlined } from "@mui/icons-material";
import ContactsContainer from "./ContactsContainer";

const resetData = {
  name: "",
  phone: "",
  email: "",
  marketing: "",
  notes: "",
};

const marketingOptions = [
  "Word of mouth",
  "Search engine, e.g. Google",
  "Instagram",
  "WeChat",
  "X",
  "Pamphlet",
  "Other",
];

export default function ContactUsForm() {
  const [formData, setFormData] = useState(resetData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Format the payload
      const payload = {
        page: "contact",
        Date: new Date().toISOString(),
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        Marketing: formData.marketing,
        Enquiry: formData.notes,
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      });

      setSubmitMessage(
        "Thank you! Your enquiry has been submitted. We will contact you soon."
      );

      setFormData(resetData);
    } catch (error) {
      setSubmitMessage(
        "There was an error submitting your form. Please try again or contact us directly.."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SnapScrollSection visibility={0.8}>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        gap={3}
        padding={2}
        maxWidth={"xl"}
      >
        {/* Contact Information */}
        <ContactsContainer />

        {/* Form */}
        <Box sx={formContainerSx}>
          <h2>
            <span className="accent">Contact</span> Us
          </h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack gap={2}>
              <TextField
                required
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={darkFieldSx}
                variant="standard"
              />

              {/* Phone and Email */}
              <TextField
                required
                type="tel"
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                sx={darkFieldSx}
                variant="standard"
              />
              <TextField
                required
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={darkFieldSx}
                variant="standard"
              />

              {/* Marketing */}
              <FormControl sx={darkFieldSx} variant="standard">
                <InputLabel id="marketing-label">
                  How did you hear about us?
                </InputLabel>
                <Select
                  labelId="marketing-label"
                  id="marketing-select"
                  name="marketing"
                  value={formData.marketing}
                  onChange={handleInputChange}
                  label={`How did you hear about us`}
                >
                  <MenuItem value="">
                    <em>Select an option</em>
                  </MenuItem>
                  {marketingOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      <ListItemText primary={option} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                multiline
                rows={4}
                label="Write your enquiry"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Ask about classes, timetable, or other questions..."
                sx={darkFieldSx}
                variant="standard"
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Stack>

            {submitMessage && <Alert sx={{ mt: 2 }}>{submitMessage}</Alert>}
          </Box>
        </Box>
      </Stack>
    </SnapScrollSection>
  );
}
