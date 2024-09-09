import { render, screen } from "@testing-library/react";
import Preview from "@/components/Preview";
import { DateProvider } from "@/context/RecurringDate";

describe("Preview", () => {
  it("should render recurring dates in preview", () => {
    render(
      <DateProvider>
        <Preview />
      </DateProvider>
    );

       expect(screen.getByText("No dates selected")).toBeInTheDocument();

      });
});