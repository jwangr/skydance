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
    const classOptions = screen.getAllByRole("option")
    expect(classOptions.length).toBeGreaterThan(0)
  });
});
