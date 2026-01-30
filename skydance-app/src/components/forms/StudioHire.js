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
import { GOOGLE_SCRIPT_URL } from "@/lib/googleScript";
import { darkFieldSx, formContainerSx } from "./FormComponentStyles";
import ContactsContainer from "./ContactsContainer";

const resetData = {
  studio: "",
  event: "",
  name: "",
  bookingDate: null,
  phone: "",
  email: "",
  notes: "",
};

export default function StudioHireForm() {
  const [formData, setFormData] = useState(resetData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

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
        Studio: formData.studio,
        Name: formData.name,
        BookingDate: formData.bookingDate?.toDate().toLocaleDateString() || "",
        Event: formData.event,
        Phone: formData.phone,
        Email: formData.email,
        Notes: formData.notes,
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }
      setAlertType("success");
      setSubmitMessage(
        "Thank you! Your enquiry has been submitted. We will contact you soon.",
      );

      // setFormData(resetData);
    } catch (error) {
      setAlertType("error");
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
        marginX={"auto"}
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

              <FormControl
                required
                fullWidth
                sx={darkFieldSx}
                variant="standard"
              >
                <InputLabel>Studio</InputLabel>
                <Select
                  name="studio"
                  value={formData.studio}
                  onChange={handleInputChange}
                  label="Pick a studio"
                >
                  <MenuItem value="">
                    <em>Select reason</em>
                  </MenuItem>
                  <MenuItem value="Studio-1">Studio 1</MenuItem>
                  <MenuItem value="Studio-2">Studio 2</MenuItem>
                  <MenuItem value="Music-Room">Music Room</MenuItem>
                  <MenuItem value="Meeting-Room">Meeting Room</MenuItem>
                </Select>
              </FormControl>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    label="Booking Date"
                    format="DD/MM/YYYY"
                    value={formData.bookingDate}
                    onChange={(date) =>
                      setFormData({ ...formData, bookingDate: date })
                    }
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
                    <MenuItem value="Dance-Practice">Dance Practice</MenuItem>
                    <MenuItem value="Party">Party</MenuItem>
                    <MenuItem value="Workshop">Training Workshop</MenuItem>
                    <MenuItem value="Other">
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
                label="Additional Notes (e.g. description of event, preferred studio, number of people...)"
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

            {submitMessage && (
              <Alert sx={{ mt: 2 }} severity={alertType}>
                {submitMessage}
              </Alert>
            )}
          </Box>
        </Box>
      </Stack>
    </>
  );
}
