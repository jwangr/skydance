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
import { CakeOutlined } from "@mui/icons-material";
import ContactsContainer from "./ContactsContainer";

const resetData = {
  grade: "",
  subject: "",
  parentName: "",
  studentName: "",
  dob: null,
  gender: "",
  phone: "",
  email: "",
  notes: "",
};

export default function TutoringEnrolment() {
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
        page: "tutoring",
        Date: new Date().toISOString(),
        Grade: formData.grade,
        Subject: formData.subject,
        StudentName: formData.studentName,
        DOB: formData.dob?.toDate().toLocaleDateString(),
        Gender: formData.gender,
        ParentName: formData.parentName,
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
      setAlertType("success");
      setFormData(resetData);
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
        marginX={"auto"}
      >
        {/* Contact Information */}
        <ContactsContainer />

        {/* Form */}
        <Box sx={formContainerSx}>
          <h2>
            <span className="accent">Join</span> Our Tutoring Class Today
          </h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack gap={2}>
              <FormControl
                required
                fullWidth
                sx={darkFieldSx}
                variant="standard"
              >
                <InputLabel>Grade</InputLabel>
                <Select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  label="Grade"
                >
                  <MenuItem value="">
                    <em>Select grade</em>
                  </MenuItem>
                  <MenuItem value="K">K</MenuItem>
                  {Array.from({ length: 12 }).map((_, yr) => (
                    <MenuItem value={yr + 1}>{yr + 1}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                required
                fullWidth
                sx={darkFieldSx}
                variant="standard"
              >
                <InputLabel>Subject</InputLabel>
                <Select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  label="Subject"
                >
                  <MenuItem value="">
                    <em>Select subject</em>
                  </MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Maths">Maths</MenuItem>
                  <MenuItem value="Science">Science</MenuItem>
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
                label="Parent or Guardian Name (for students under 18 years old)"
                name="parentName"
                value={formData.parentName}
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
