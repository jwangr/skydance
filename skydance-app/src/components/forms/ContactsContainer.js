import React from "react";
import { contactsContainerSx } from "./FormComponentStyles";
import { Box } from "@mui/material";
import SocialLinks from "../SocialLinks";
import GetInTouchDescriptors from "../GetInTouchDescriptors";
import EmbeddedMap from "../EmbeddedMap";
import contacts from "@/lib/data/contact";

export default function ContactsContainer() {
  return (
    <Box sx={contactsContainerSx}>
      <h2>Get In Touch</h2>

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
  );
}
