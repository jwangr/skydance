"use client";

import { useState } from "react";
import { Box, Stack } from "@mui/material";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import GetInTouchDescriptors from "@/components/GetInTouchDescriptors";
import EmbeddedMap from "@/components/EmbeddedMap";
import SocialLinks from "@/components/SocialLinks";
import Hero from "@/components/HeroImage";
import SnapScrollSection from "@/components/SnapScrollSection";
import { GOOGLE_SCRIPT_URL } from "@/lib/googleScript";
import ContactUsForm from "@/components/forms/ContactUs";

const marketingOptions = [
  "Word of mouth",
  "Search engine, e.g. Google",
  "Instagram",
  "WeChat",
  "X",
  "Pamphlet",
  "Other",
];

export default function ContactPage() {
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
        page: "contact",
        Date: new Date().toISOString(),
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        Marketing: formData.marketing,
        Enquiry: formData.notes,
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
    <>
      <ContactUsForm />
    </>
  );
}
