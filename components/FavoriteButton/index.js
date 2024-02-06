export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button type="button" onClick={onToggleFavorite}>
      {isFavorite ? "❤️ Unfavorite" : "🤍 Favorite"}
    </button>
  );
}
