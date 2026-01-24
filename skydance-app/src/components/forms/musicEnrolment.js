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

export default function MusicEnrolment() {
  const [formData, setFormData] = useState({
    instrument: "",
    studentName: "",
    dob: null,
    gender: "",
    address: "",
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
        page: "music",
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
        "Thank you! Your enquiry has been submitted. We will contact you soon.",
      );

      setFormData({
        instrument: "",
        studentName: "",
        dob: null,
        gender: "",
        address: "",
        phone: "",
        email: "",
        notes: "",
      });
    } catch (error) {
      setSubmitMessage(
        "There was an error submitting your form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
            <span className="accent">Sign Up</span> for a Trial Class Today
          </h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack gap={2}>
              <FormControl
                required
                fullWidth
                sx={darkFieldSx}
                variant="standard"
              >
                <InputLabel>Instrument</InputLabel>
                <Select
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleInputChange}
                  label="Instrument"
                >
                  <MenuItem value="">
                    <em>Select instrument</em>
                  </MenuItem>
                  <MenuItem value="piano">Piano</MenuItem>
                  <MenuItem value="violin">Violin</MenuItem>
                  <MenuItem value="singing">Singing</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                label="Student Name"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                sx={darkFieldSx}
                variant="standard"
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    label="Date of Birth"
                    format="DD/MM/YYYY"
                    value={formData.dob}
                    onChange={(dob) => setFormData({ ...formData, dob })}
                    sx={darkFieldSx}
                    variant="standard"
                    slotProps={{
                      openPickerIcon: {
                        color: "primary",
                      },
                    }}
                    slots={{
                      openPickerIcon: CakeOutlined,
                    }}
                  />
                </LocalizationProvider>

                <FormControl
                  required
                  fullWidth
                  sx={darkFieldSx}
                  variant="standard"
                >
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    label="Gender"
                  >
                    <MenuItem value="">
                      <em>Select gender</em>
                    </MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                    <MenuItem value="prefer-not-to-say">
                      Prefer not to say
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <TextField
                required
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                sx={darkFieldSx}
                variant="standard"
              />

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
                label="Additional Notes (e.g. level of experience, special learning needs)"
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
    </>
  );
}
