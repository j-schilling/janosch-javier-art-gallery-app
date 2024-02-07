export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button type="button" onClick={onToggleFavorite}>
      {isFavorite ? "❤️ Remove from favorites" : "🤍 Add to favorites"}
    </button>
  );
}
