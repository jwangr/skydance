import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import socialLinks from "@/lib/data/socialLinks.json";
import { Stack } from "@mui/material";

const iconMap = {
  Instagram: <InstagramIcon sx={{ color: "var(--accent-1)" }} />,
  Facebook: <FacebookIcon sx={{ color: "var(--accent-1)" }} />,
  Twitter: <TwitterIcon sx={{ color: "var(--accent-1)" }} />,
};

export default function SocialLinks() {
  return (
    <Stack direction={"row"} gap={3} justifyContent={"center"}>
      {socialLinks.map(({ title, link, icon }) => (
        <a href={link}>{iconMap[icon]}</a>
      ))}
    </Stack>
  );
}
