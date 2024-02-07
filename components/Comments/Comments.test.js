import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import "@testing-library/jest-dom";
import Comments from "./";

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});

describe("Comments", () => {
  const mockComments = [
    { date: "2023-01-01", time: "12:00", comment: "First comment" },
    { date: "2023-01-02", time: "13:00", comment: "Second comment" },
  ];

  it("renders comments correctly", () => {
    render(
      <MantineProvider>
        <Comments comments={mockComments} />
      </MantineProvider>
    );

    mockComments.forEach((comment) => {
      expect(screen.getByText(comment.comment)).toBeInTheDocument();
      expect(screen.getByText(comment.date)).toBeInTheDocument();
      expect(screen.getByText(comment.time)).toBeInTheDocument();
    });
  });

  it("displays a message when there are no comments", () => {
    render(
      <MantineProvider>
        <Comments comments={[]} />
      </MantineProvider>
    );

    expect(
      screen.getByText("There is no comments to show.")
    ).toBeInTheDocument();
  });
});
