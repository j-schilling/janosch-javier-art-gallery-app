import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ArtPieces from ".";

jest.mock("use-local-storage-state", () => {
  return jest.fn(() => [jest.fn(), jest.fn()]);
});

jest.mock("../ArtPiecePreview", () => ({
  ArtPiecePreview: () => <div>Mock ArtPiecePreview</div>,
}));

describe("ArtPieces", () => {
  test("renders correctly based on pieces prop", () => {
    const pieces = [
      {
        slug: "1",
        imageSource: "image1.jpg",
        name: "Art Piece 1",
        artist: "Artist 1",
      },
      {
        slug: "2",
        imageSource: "image2.jpg",
        name: "Art Piece 2",
        artist: "Artist 2",
      },
      {
        slug: "3",
        imageSource: "image3.jpg",
        name: "Art Piece 3",
        artist: "Artist 3",
      },
    ];

    render(<ArtPieces pieces={pieces} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(pieces.length);
  });
});
