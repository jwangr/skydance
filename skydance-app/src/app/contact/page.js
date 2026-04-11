import ContactUsForm from "@/components/forms/ContactUs";

export const metadata = {
  title: "Contact Sky Dance Studio | Auburn Sydney",
  description:
    "Get in touch with Sky Dance Studio in Auburn, Sydney. Enquire about dance classes, enrolments, schedules or studio hire.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Sky Dance Studio",
    description:
      "Contact Sky Dance Studio in Auburn, Sydney for class enquiries, enrolments and studio information.",
    url: "https://skydancestudio.com.au/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactUsForm />
    </>
  );
}
