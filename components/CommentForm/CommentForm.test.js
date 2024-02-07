import { render, screen, fireEvent } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CommentForm from "./";

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});

describe("CommentForm", () => {
  it("allows the user to input a comment", async () => {
    render(
      <MantineProvider>
        <CommentForm onSubmitComment={() => {}} />
      </MantineProvider>
    );

    const input = screen.getByPlaceholderText("Write your comment here");
    await userEvent.type(input, "Test comment");

    expect(input).toHaveValue("Test comment");
  });

  it("calls onSubmitComment with the comment when the form is submitted", async () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(
      <MantineProvider>
        <CommentForm onSubmitComment={handleSubmit} />
      </MantineProvider>
    );

    const input = screen.getByPlaceholderText("Write your comment here");
    await userEvent.type(input, "Test comment");
    fireEvent.submit(screen.getByRole("button", { name: "Send" }));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
