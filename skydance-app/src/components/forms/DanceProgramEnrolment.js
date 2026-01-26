"use client";

import { useState } from "react";

import {
  Box,
  Checkbox,
  Chip,
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
import danceWorkshops from "@/lib/data/danceWorkshops";
import danceIntensives from "@/lib/data/danceIntensives";

const workshops = danceWorkshops;
const intensives = danceIntensives;

const danceClasses = [...workshops, ...intensives];

const resetData = {
  studentName: "",
  parentName: "",
  dob: null,
  gender: "",
  phone: "",
  email: "",
  notes: "",
};
export default function DanceProgramEnrolment() {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [formData, setFormData] = useState(resetData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleClassChange = (e) => {
    const value = e.target.value;
    setSelectedClasses(typeof value === "string" ? value.split(",") : value);
  };

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
        page: "danceprogram",
        Date: new Date().toISOString(),
        Program: selectedClasses.join(", "),
        StudentName: formData.studentName,
        DOB: formData.dob.toDate().toLocaleDateString(),
        Gender: formData.gender,
        ParentName: formData.parentName || "",
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

      setAlertType("success");
      setSubmitMessage(
        "Thank you! Your form has been submitted successfully. We will contact you soon.",
      );

      // Reset form
      setFormData(resetData);
      setSelectedClasses([]);
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
        marginX={"auto"}
      >
        {/* Contact Information */}
        <ContactsContainer />

        {/* Form */}
        <Box sx={formContainerSx}>
          <h2>
            <span className="accent">Expression of Interest</span> for Dance
            Programs
          </h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack direction={"column"} gap={2}>
              {/* Select Programs */}
              <FormControl required sx={darkFieldSx} variant="standard">
                <InputLabel id="dance-class-label">
                  Select Dance Programs
                </InputLabel>
                <Select
                  labelId="dance-class-label"
                  id="dance-class-select"
                  multiple={true}
                  value={selectedClasses}
                  onChange={handleClassChange}
                  label={`Select Dance Prograns`}
                  renderValue={(selected) => (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        color: "white",
                      }}
                    >
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          size="small"
                          sx={{
                            color: "white",
                            backgroundColor: "var(--bg5)",
                          }}
                        />
                      ))}
                    </Box>
                  )}
                  sx={{
                    minHeight: "56px",
                  }}
                >
                  {danceClasses.map((cls) => (
                    <MenuItem key={cls.title} value={cls.title}>
                      <Checkbox
                        checked={selectedClasses.indexOf(cls.title) > -1}
                      />
                      <ListItemText primary={cls.title} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Student Name */}
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

              {/* Parent Name */}
              <TextField
                label="Parent or Guardian Name (for students under 18 years old)"
                name="parentName"
                value={formData.parentName}
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

              <TextField
                multiline
                rows={4}
                label="Additional Notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Previous level of expertise, special learning needs, or questions..."
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
