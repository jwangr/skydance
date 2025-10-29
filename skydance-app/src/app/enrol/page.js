"use client";

import { useState } from "react";
import classes from "@/lib/data/classdescriptions.json";
import { Box, FormLabel, IconButton, Paper, Stack } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import socialLinks from "@/lib/data/socialLinks.json";

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

const danceClasses = classes.map((x) => x.title);
const iconMap = {
  Instagram: <InstagramIcon />,
  Facebook: <FacebookIcon />,
  Twitter: <TwitterIcon />,
};

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
        backgroundColor: "var(--bg1)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "5.5rem", marginBottom: "1rem" }}>
            Enrol or Trial a Class
          </h1>
          <p>Join our dance community today</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                marginBottom: "2rem",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Get In Touch
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--bg6)"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <strong>Address</strong>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      color: "#666",
                      lineHeight: "1.6",
                    }}
                  >
                    Shop 8/219 Parramatta Rd (Level 1),
                    <br />
                    Auburn, NSW 2144
                    <br />
                    Australia
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--bg6)"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <strong>Phone</strong>
                  <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>
                    (02) 1234 5678
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--bg6)"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <strong>Email</strong>
                  <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>
                    info@skydance.com.au
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <strong style={{ display: "block", marginBottom: "1rem" }}>
                  Follow Us
                </strong>
                {/* Social Media Links */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  {socialLinks.map((link) => (
                    <Link href={link.link}>
                      <IconButton aria-label="link.title">
                        {iconMap[link.icon]}
                      </IconButton>
                    </Link>
                  ))}
                </Box>
              </div>
            </div>
          </div>

          {/* Enrolment Form */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              gridColumn: "span 2",
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend" sx={{ mb: 1, fontWeight: 600 }}>
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

              <FormControl fullWidth required sx={{ mb: 3 }}>
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
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
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
                        <Checkbox checked={selectedClasses.indexOf(cls) > -1} />
                      )}
                      <ListItemText primary={cls} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                required
                label="Student Name"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
              />

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ mb: 3 }}
              >
                  <TextField
                    fullWidth
                    required
                    type="date"
                    label="Date of Birth"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  <FormControl fullWidth required>
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

              <TextField
                fullWidth
                required
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
              />

                  <TextField
                    fullWidth
                    required
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />

              <TextField
                fullWidth
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
          </div>
        </div>
      </div>
    </div>
  );
}
