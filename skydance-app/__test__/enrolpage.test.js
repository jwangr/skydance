import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import EnrolPage from "@/app/enrol/page.js";

describe("Enrol page", () => {
  it("Should display a heading and subheading", () => {
    render(<EnrolPage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/join now$/i);

    const subheading = screen.getByText(
      /^Be a part of the Sky Dance community today$/i
    );
    expect(subheading).toBeInTheDocument();
  });
  it("Should display multi-select class options when enrol is selected", async () => {
    render(<EnrolPage />);
    const user = userEvent.setup();
    const enrolRadio = screen.getByLabelText(/enrol/i);
    await user.click(enrolRadio);
    const select = screen.getByRole("combobox", {
      name: /select dance classes/i,
    });
    await user.click(select);
    const classCheckboxes = screen.getAllByRole("checkbox");
    expect(classCheckboxes.length).toBeGreaterThan(0);
  });
  it("Should display single-select class options when trial is selected", async () => {
    render(<EnrolPage />);
    const user = userEvent.setup();
    const trialRadio = screen.getByLabelText(/trial a class/i);
    await user.click(trialRadio);
    const select = screen.getByRole("combobox", {
      name: /select dance class/i,
    });
    await user.click(select);
    const classOptions = screen.getAllByRole("option");
    expect(classOptions.length).toBeGreaterThan(0);
  });
  it("Should render input fields for contact's name, student's name, DOB, Number, Gender, Address and Additional Notes", () => {
    render(<EnrolPage />);
    // check each input by label text (recommended for accessibility)
    expect(screen.getByLabelText(/student name/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/contact's name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/additional notes/i)).toBeInTheDocument();
  });
  it("Should validate emails", () => {
    render(<EnrolPage />);
    const user = userEvent.setup()
    const 
  });
  it("Should validate phone numbers", () => {
    render(<EnrolPage />);
  });
});
