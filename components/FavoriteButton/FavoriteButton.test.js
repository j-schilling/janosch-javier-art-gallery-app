import { render, screen, fireEvent } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FavoriteButton from ".";

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});

describe("FavoriteButton", () => {
  it('should render a button element with the text "🤍 Favorite" when isFavorite is false', () => {
    render(
      <MantineProvider>
        <FavoriteButton isFavorite={false} onToggleFavorite={() => {}} />
      </MantineProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("🤍 Add to favorites");
  });
  it('should render a button element with the text "❤️ Remove from favorites" when isFavorite is true', () => {
    render(
      <MantineProvider>
        <FavoriteButton isFavorite={true} onToggleFavorite={() => {}} />
      </MantineProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("❤️ Remove from favorites");
  });
});
