import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("renders correctly", () => {
    const onSubmitMock = jest.fn();
    render(<SearchBar onSubmit={onSubmitMock} />);

    const inputElement = screen.getByPlaceholderText("Enter Username");
    const buttonElement = screen.getByRole("button", { name: "Search" });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onSubmit handler with correct keyword", () => {
    const onSubmitMock = jest.fn();

    render(<SearchBar onSubmit={onSubmitMock} />);

    const inputElement = screen.getByPlaceholderText("Enter Username");
    const buttonElement = screen.getByRole("button", { name: "Search" });

    fireEvent.change(inputElement, { target: { value: "example" } });
    fireEvent.click(buttonElement);

    expect(onSubmitMock).toHaveBeenCalledWith("example");
  });
});
