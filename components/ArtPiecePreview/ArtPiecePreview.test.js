import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecePreview from ".";

jest.mock("use-local-storage-state", () => {
  return jest.fn(() => [jest.fn(), jest.fn()]);
});

test("renders an image", () => {
  const prop = [
    {
      slug: "orange-red-and-green",
      artist: "Steve Johnson",
      name: "Orange Red and Green Abstract Painting",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      year: "2018",
      genre: "Abstract Painting",
      colors: ["#0F5855", "#E6BA15", "#B42011", "#CEC4C6", "#D5561F"],
      dimensions: {
        height: 2432,
        width: 1920,
        type: "jpg",
      },
    },
  ];
  render(<ArtPiecePreview props={prop} />);
  const image = screen.getByRole("img", {});
  expect(image).toBeInTheDocument();
});
