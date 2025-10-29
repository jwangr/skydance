"use client";

import { useState } from "react";
import classes from "@/lib/data/classdescriptions.json";
import contacts from "@/lib/data/contact.json";
import { Box, FormLabel, IconButton, Paper, Stack } from "@mui/material";
import Link from "next/link";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import GetInTouchDescriptors from "@/components/GetInTouchDescriptors";
import EmbeddedMap from "@/components/EmbeddedMap";
import SocialLinks from "@/components/SocialLinks";

const danceClasses = classes.map((x) => x.title);

export default function EnrolPage() {
  const [formType, setFormType] = useState("trial");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    notes: "",
  });
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

    // Replace this URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

    const dataToSubmit = {
      formType,
      classes: selectedClasses.join(", "),
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      setSubmitMessage(
        "Thank you! Your form has been submitted successfully. We will contact you soon."
      );

      // Reset form
      setFormData({
        studentName: "",
        dob: "",
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
    <div
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        background: "linear-gradient(to bottom right, var(--bg1), var(--bg5))",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "var(--bg1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
          padding: "4rem 3rem",
          textAlign: "center",
        }}
      >
        {/* Headings */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "5.5rem", marginBottom: "1rem" }}>
            Enrol or Trial a Class
          </h1>
          <p>Join the Sky Dance community today</p>
        </div>

        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          {/* Contact Information */}
          <Box
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Get In Touch
            </h2>

            <Box marginY={2}>
              <SocialLinks />
            </Box>

            {contacts.map(({ title, description, link }) => (
              <GetInTouchDescriptors
                title={title}
                description={description}
                link={link}
                key={title}
              />
            ))}

            {/* Embedded map */}
            <EmbeddedMap />
          </Box>

          {/* Enrolment Form */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Stack direction={"column"} gap={2}>
                {/* Radio Group - Trial vs Enrol */}
                <FormControl>
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
                <FormControl required>
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
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value} label={value} size="small" />
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
                          <Checkbox
                            checked={selectedClasses.indexOf(cls) > -1}
                          />
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
                />

                {/* DOB and Gender */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    required
                    type="date"
                    label="Date of Birth"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  <FormControl required>
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
                />

                <TextField
                  required
                  type="tel"
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <TextField
                  multiline
                  rows={4}
                  label="Additional Notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any medical conditions, preferred times, or questions..."
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    backgroundColor: "var(--bg6)",
                    "&:hover": {
                      backgroundColor: "#a070a0",
                    },
                    "&:disabled": {
                      backgroundColor: "#ccc",
                    },
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Stack>

              {submitMessage && (
                <Alert
                  severity={
                    submitMessage.includes("error") ? "error" : "success"
                  }
                  sx={{ mt: 2 }}
                >
                  {submitMessage}
                </Alert>
              )}
            </Box>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
