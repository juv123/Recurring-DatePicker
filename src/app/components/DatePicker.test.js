import { render, screen, fireEvent } from "@testing-library/react";
import DatePicker from "@/components/DatePicker";
import { DateProvider } from "@/context/RecurringDate";

describe("DatePicker", () => {
  it("should update start date and recurring option", () => {
    render(
      <DateProvider>
        <DatePicker />
      </DateProvider>
    );

    // Set the start date
    const startDateInput = screen.getByLabelText("Start Date:");
    fireEvent.change(startDateInput, { target: { value: "2023-09-01" } });
    expect(startDateInput.value).toBe("2023-09-01");

    // testing with 'daily' recurrig option
    const select = screen.getByLabelText("Recurring Option:");
    fireEvent.change(select, { target: { value: "daily" } });
    expect(select.value).toBe("daily");
  });
});