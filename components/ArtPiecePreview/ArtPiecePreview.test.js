import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import { ArtPiecePreview } from ".";

jest.mock("../../context/ArtPiecesContext", () => ({
  useArtPieces: () => ({
    artPiecesInfo: {},
    toggleFavorite: jest.fn(),
  }),
}));

jest.mock("../FavoriteButton", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mock Favorite Button</div>),
}));

beforeAll(() => {
  // Setup that needs to run once before all tests go here
  window.matchMedia = jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});

describe("ArtPiecePreview", () => {
  const mockProps = {
    slug: "test-slug",
    imageSource: "test-image.jpg",
    name: "Test Name",
    artist: "Test Artist",
  };

  it("renders correctly", () => {
    render(
      <MantineProvider>
        <ArtPiecePreview {...mockProps} />
      </MantineProvider>
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "test-image.jpg");
    expect(image).toHaveAttribute("alt", "Test Name");

    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();

    expect(screen.getByText("Mock Favorite Button")).toBeInTheDocument();
  });
});
