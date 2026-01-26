"use client";

import { useState } from "react";

import {
  Box,
  FormControlLabel,
  FormLabel,
  ListItemText,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

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
import classes from "@/lib/data/classdescriptions";

const danceClasses = classes.map((x) => x.title);

const resetData = {
  format: "Group",
  class: "",
  parentName: "",
  studentName: "",
  dob: null,
  gender: "",
  phone: "",
  email: "",
  notes: "",
};
export default function DanceEnrolment() {
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
      // Format the payload
      const payload = {
        page: "dance",
        Date: new Date().toISOString(),
        Format: formData.format || "",
        Class: formData.class || "",
        ParentName: formData.parentName || "",
        StudentName: formData.studentName || "",
        DOB: formData.dob.toDate().toLocaleDateString() || "",
        Gender: formData.gender || "",
        Phone: formData.phone || "",
        Email: formData.email || "",
        Notes: formData.notes || "",
      };
      console.log(payload);
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      });

      const data = await response.json();
      console.log(data);

      if (!data.success) {
        throw new Error(data.error);
      }

      setAlertType("success");
      setSubmitMessage(
        "Thank you! Your form has been submitted successfully. We will contact you soon.",
      );

      // Reset form
      // setFormData(resetData); // disabled for testing purposes
    } catch (error) {
      console.error("Error:", error);
      setAlertType("error");
      setSubmitMessage(
        "There was an error submitting your form. Please try again or contact us directly.",
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
            <span className="accent">Trial</span> A Dance Class Today
          </h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack direction={"column"} gap={2}>
              {/* Radio Group - Class Format */}
              <FormControl sx={darkFieldSx} variant="standard">
                <FormLabel sx={{ mb: 1, fontWeight: 600, textAlign: "left" }}>
                  Class Format
                </FormLabel>
                <RadioGroup
                  name="format"
                  row
                  value={formData.format}
                  onChange={handleInputChange}
                  sx={{ gap: 2 }}
                >
                  <FormControlLabel
                    value="Group"
                    control={<Radio />}
                    label="Group Class"
                  />
                  <FormControlLabel
                    value="Private"
                    control={<Radio />}
                    label="Private 1:1 Class"
                  />
                </RadioGroup>
              </FormControl>

              {/* Select Class */}
              <FormControl required sx={darkFieldSx} variant="standard">
                <InputLabel id="dance-class-label">
                  Select Dance Class
                </InputLabel>
                <Select
                  labelId="dance-class-label"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">
                    <em>Select a class</em>
                  </MenuItem>
                  {danceClasses.map((cls) => (
                    <MenuItem key={cls} value={cls}>
                      <ListItemText primary={cls} />
                    </MenuItem>
                  ))}
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

              {/* DOB and Gender */}
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
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    label="Gender"
                  >
                    <MenuItem value="">
                      <em>Select gender</em>
                    </MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                    <MenuItem value="Prefer-not-to-say">
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

              <TextField
                multiline
                rows={4}
                label="Additional Notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Previous level of expertise, special learning needs, or medical conditions..."
                sx={darkFieldSx}
                variant="standard"
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{
                  color: "white",
                }}
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
