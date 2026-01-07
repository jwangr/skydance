"use client";

import { useState } from "react";

import { Box, Stack } from "@mui/material";

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

export default function StudioHireForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: null,
    event: "",
    phone: "",
    email: "",
    notes: "",
  });

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
      const payload = {
        page: "studiohire",
        Date: new Date().toISOString(),
        Name: formData.studentName,
        DOB: formData.dob?.toDate().toLocaleDateString(),
        Gender: formData.gender,
        Address: formData.address,
        Phone: formData.phone,
        Email: formData.email,
        Notes: formData.notes,
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

      setFormData({
        name: "",
        date: null,
        event: "",
        phone: "",
        email: "",
        notes: "",
      });
    } catch (error) {
      setSubmitMessage(
        "There was an error submitting your form. Please try again."
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
            <span className="accent">Enquire </span> about studio hire 
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

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    label="Date"
                    format="DD/MM/YYYY"
                    value={formData.date}
                    onChange={(date) => setFormData({ ...formData, date })}
                    sx={darkFieldSx}
                    variant="standard"
                    slotProps={{
                      openPickerIcon: {
                        color: "primary",
                      },
                    }}
                  />
                </LocalizationProvider>

                <FormControl
                  required
                  fullWidth
                  sx={darkFieldSx}
                  variant="standard"
                >
                  <InputLabel>Event</InputLabel>
                  <Select
                    name="event"
                    value={formData.event}
                    onChange={handleInputChange}
                    label="Type of Event"
                  >
                    <MenuItem value="">
                      <em>Select reason</em>
                    </MenuItem>
                    <MenuItem value="dance">Dance Practice</MenuItem>
                    <MenuItem value="party">Party</MenuItem>
                    <MenuItem value="other">
                      Other (specify in Additional Notes)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <TextField
                required
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                sx={darkFieldSx}
                variant="standard"
              />

              <TextField
                required
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={darkFieldSx}
                variant="standard"
              />

              <TextField
                multiline
                rows={4}
                label="Additional Notes (e.g. description of event, number of people, other requirements)"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
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
