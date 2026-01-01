const darkFieldSx = {
  "& label": {
    color: "#e5e7eb", // grey
  },
  "& label.Mui-focused": {
    color: "#f59e0b", // warm highlight (or coral/purple)
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
    borderBottomColor: "#f59e0b",
  },
};

const formContainerSx = {
  background: "linear-gradient(135deg, #1c1f26, #121417)",
  borderRadius: "16px",
  p: 4,
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  color: "white",
  width: "80%",
  maxWidth: "lg",
  marginX: "auto",
};

const datePickerSx = {
  "& label": {
    color: "#ffffffff",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255,255,255,0.3)",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiSvgIcon-root": {
    color: "#fff", // calendar icon
  },
};

export { darkFieldSx, formContainerSx, datePickerSx };
