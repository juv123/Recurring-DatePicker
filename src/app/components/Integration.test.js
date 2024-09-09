import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page"; // Assuming this is your Home component
import { DateProvider } from "@/context/RecurringDate";

describe("Integration test for both DatePicker and Preview", () => {
  it("should display recurring dates in the Preview", () => {
    render(
      <DateProvider>
        <Home />
      </DateProvider>
    );

    // Set the start date
    const startDateInput = screen.getByLabelText("Start Date:");
    fireEvent.change(startDateInput, { target: { value: "2023-09-01" } });
    expect(startDateInput.value).toBe("2023-09-01");

    // Set the end date
    const endDateInput = screen.getByLabelText("End Date (optional):");
    fireEvent.change(endDateInput, { target: { value: "2023-09-08" } });
    expect(endDateInput.value).toBe("2023-09-08");

    // Change the recurring pattern to daily
    const select = screen.getByLabelText("Recurring Option:");
    fireEvent.change(select, { target: { value: "daily" } });

  
    const generatedDates = screen.getByText("Generated Dates:");
    expect(generatedDates).toBeInTheDocument();
    expect(screen.getByText("Sat Sep 02 2023")).toBeInTheDocument();
  });
});