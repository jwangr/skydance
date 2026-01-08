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
import SnapScrollSection from "@/components/SnapScrollSection";
import { GOOGLE_SCRIPT_URL } from "@/lib/googleScript";
import { darkFieldSx, formContainerSx } from "./FormComponentStyles";
import { CakeOutlined } from "@mui/icons-material";
import ContactsContainer from "./ContactsContainer";
import classes from "@/lib/data/classdescriptions";
const danceClasses = classes.map((x) => x.title);

const resetData = {
  studentName: "",
  dob: null,
  gender: "",
  address: "",
  phone: "",
  email: "",
  notes: "",
};
export default function DanceEnrolment() {
  const [formType, setFormType] = useState("trial");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [formData, setFormData] = useState(resetData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleClassChange = (e) => {
    const value = e.target.value;
    if (formType === "trial") {
      setSelectedClasses([value]);
    } else {
      setSelectedClasses(typeof value === "string" ? value.split(",") : value);
    }
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
        page: "join",
        Date: new Date().toISOString(),
        JoinType: formType,
        Classes: selectedClasses.join(", "),
        Name: formData.studentName,
        DOB: formData.dob.toDate().toLocaleDateString(),
        Gender: formData.gender,
        Address: formData.address,
        Phone: formData.phone,
        Email: formData.email,
        Notes: formData.notes,
      };
      console.log(payload);
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      });

      console.log(response);
      setSubmitMessage(
        "Thank you! Your form has been submitted successfully. We will contact you soon."
      );

      // Reset form
      setFormData({
        studentName: "",
        dob: null,
        gender: "",
        address: "",
        phone: "",
        email: "",
        notes: "",
      });
      setSelectedClasses([]);
      setFormType("trial");
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage(
        "There was an error submitting your form. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SnapScrollSection visibility={0.9}>
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
            <span className="accent">Join</span> A Dance Class Today
          </h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack direction={"column"} gap={2}>
              {/* Radio Group - Trial vs Enrol */}
              <FormControl sx={darkFieldSx} variant="standard">
                <FormLabel sx={{ mb: 1, fontWeight: 600, textAlign: "left" }}>
                  I want to...
                </FormLabel>
                <RadioGroup
                  row
                  value={formType}
                  onChange={(e) => {
                    setFormType(e.target.value);
                    setSelectedClasses([]);
                  }}
                  sx={{ gap: 2 }}
                >
                  <FormControlLabel
                    value="trial"
                    control={<Radio />}
                    label="Trial a Class"
                  />
                  <FormControlLabel
                    value="enrol"
                    control={<Radio />}
                    label="Enrol"
                  />
                </RadioGroup>
              </FormControl>

              {/* Select Class(es) */}
              <FormControl required sx={darkFieldSx} variant="standard">
                <InputLabel id="dance-class-label">
                  Select Dance Class{formType === "enrol" ? "es" : ""}
                </InputLabel>
                <Select
                  labelId="dance-class-label"
                  id="dance-class-select"
                  multiple={formType === "enrol"}
                  value={
                    formType === "trial"
                      ? selectedClasses[0] || ""
                      : selectedClasses
                  }
                  onChange={handleClassChange}
                  label={`Select Dance Class${
                    formType === "enrol" ? "es" : ""
                  }`}
                  renderValue={
                    formType === "enrol"
                      ? (selected) => (
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
                        )
                      : undefined
                  }
                  sx={{
                    minHeight: formType === "enrol" ? "56px" : "auto",
                  }}
                >
                  {formType === "trial" && (
                    <MenuItem value="">
                      <em>Select a class</em>
                    </MenuItem>
                  )}
                  {danceClasses.map((cls) => (
                    <MenuItem key={cls} value={cls}>
                      {formType === "enrol" && (
                        <Checkbox checked={selectedClasses.indexOf(cls) > -1} />
                      )}
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
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                    <MenuItem value="prefer-not-to-say">
                      Prefer not to say
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Address */}
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

            {submitMessage && <Alert sx={{ mt: 2 }}>{submitMessage}</Alert>}
          </Box>
        </Box>
      </Stack>
    </SnapScrollSection>
  );
}
