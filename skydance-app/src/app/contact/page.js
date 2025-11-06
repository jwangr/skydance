"use client";

import { useState } from "react";
import classes from "@/lib/data/classdescriptions.json";
import contacts from "@/lib/data/contact.json";
import { Box, FormLabel, Stack } from "@mui/material";

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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import GetInTouchDescriptors from "@/components/GetInTouchDescriptors";
import EmbeddedMap from "@/components/EmbeddedMap";
import SocialLinks from "@/components/SocialLinks";
import Hero from "@/components/HeroImage";
import SnapScrollSection from "@/components/SnapScrollSection";
import { GOOGLE_SCRIPT_URL } from "@/lib/data/googleScript";

const marketingOptions = [
  "Word of mouth",
  "Search engine, e.g. Google",
  "Instagram",
  "WeChat",
  "X",
  "Pamphlet",
  "Other",
];

export default function EnrolPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    marketing: "",
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
      // Format the payload
      const payload = {
        Date: new Date().toISOString(),
        JoinType: formType,
        Classes: marketing.join(", "),
        Name: formData.name,
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
        name: "",
        phone: "",
        email: "",
        marketing: "",
        notes: "",
      });
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
    <Box
      sx={{
        minHeight: "100vh",
        // padding: { xs: 0, md: "0rem 2rem" },
        background: "linear-gradient(to bottom right, var(--bg1), var(--bg5))",
      }}
    >
      <Hero overlay="rgba(185, 131, 181, 0.5)" minHeight={"70vh"}>
        <Box sx={{ marginBottom: 5 }}>
          <h1 style={{ marginX: "auto", textAlign: "center" }}>Join Now</h1>
        </Box>
        <p>Be a part of the Sky Dance community today</p>
      </Hero>

      <SnapScrollSection visibility={0.7}>
        <Stack
          direction={{ xs: "column-reverse", md: "row-reverse" }}
          gap={3}
          padding={{ xs: 0, md: 2 }}
          marginX={{ xs: 0, lg: 15 }}
          overflow={"hidden"}
        >
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

            <EmbeddedMap />
          </Box>

          {/* Contact Form */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              width: "100%",
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Stack direction={"column"} gap={2}>
                {/* Name */}
                <TextField
                  required
                  label="Name"
                  name="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                {/* Phone and Email */}
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

                {/* Marketing */}
                <FormControl>
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
                  placeholder="Ask about classes, timetable, general questions..."
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
      </SnapScrollSection>
    </Box>
  );
}
