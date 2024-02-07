import { Button } from "@mantine/core";
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button type="button" onClick={onToggleFavorite} color="rgb(15, 88, 85)">
      {isFavorite ? "❤️ Remove from favorites" : "🤍 Add to favorites"}
    </Button>
  );
}
