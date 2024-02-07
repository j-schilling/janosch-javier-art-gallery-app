import { render, screen, fireEvent } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import "@testing-library/jest-dom";
import ArtPieceDetails from "./";

const mockAddComment = jest.fn();
const mockToggleFavorite = jest.fn();

jest.mock("../../context/ArtPiecesContext", () => ({
  useArtPieces: () => ({
    addComment: mockAddComment,
    toggleFavorite: mockToggleFavorite,
    artPiecesInfo: {
      "test-slug": {
        isFavorite: false,
        comments: [{ date: "2021-01-01", comment: "Test comment" }],
      },
    },
  }),
}));

jest.mock("../Comments", () => {
  return function MockComments() {
    return <div>Mocked Comments</div>;
  };
});
jest.mock("../FavoriteButton", () => {
  return function MockFavoriteButton() {
    return <div>Mocked FavoriteButton</div>;
  };
});

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("ArtPieceDetails", () => {
  const mockProps = {
    slug: "test-slug",
    imageSource: "test-image.jpg",
    name: "Test Name",
    artist: "Test Artist",
    year: "2021",
    genre: "Test Genre",
    colors: ["#FFFFFF", "#000000"],
  };

  it("renders correctly with given props", () => {
    render(
      <MantineProvider>
        <ArtPieceDetails {...mockProps} />
      </MantineProvider>
    );

    expect(screen.getByAltText("Test Name")).toHaveAttribute(
      "src",
      "test-image.jpg"
    );
    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();
  });
});
