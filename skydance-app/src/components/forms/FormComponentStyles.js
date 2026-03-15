const darkFieldSx = {
  "& label": {
    color: "#e5e7eb", // grey
  },
  "& label.Mui-focused": {
    color: "coral", // warm highlight (or coral/purple)
  },
  "& .MuiInputBase-input": {
    color: "#e5e7eb",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255,255,255,0.2)",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#9ca3af",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffffff",
  },
};

const datePickerSx = {
  "& .MuiPickersInputBase-root": {
    color: "white",
  },
  "& .MuiPickersInputBase-section": {
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
};
const formContainerSx = {
  background: "linear-gradient(135deg, #1c1f26, #121417)",
  borderRadius: "16px",
  p: 4,
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  color: "white",
  width: { xs: 1, md: 0.8 },
  maxWidth: "lg",
  marginX: "auto",
};

const contactsContainerSx = {
  background: "linear-gradient(135deg, #1c1f26, #121417)",
  borderRadius: "16px",
  p: 4,
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  color: "white",
  width: { xs: 1, md: 0.8 },
  maxWidth: "lg",
  marginX: "auto",
};

export { darkFieldSx, formContainerSx, datePickerSx, contactsContainerSx };
