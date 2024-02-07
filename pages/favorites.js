import { useArtPieces } from "@/context/ArtPiecesContext";
import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import classes from "../components/ArtPieces/ArtPieces.module.css";

export default function Favorites() {
  const { artPiecesInfo } = useArtPieces();

  const favoritePieces = Object.entries(artPiecesInfo)
    .filter(([slug, piece]) => piece.isFavorite)
    .map(([slug, piece]) => ({
      ...piece,
    }));

  return (
    <div>
      <h1 className={classes.h1}>My favorite art pieces</h1>
      <ul className={classes.ul}>
        {favoritePieces.length > 0 ? (
          favoritePieces.map((piece) => (
            <li key={piece.slug} className={classes.li}>
              <ArtPiecePreview {...piece} />
            </li>
          ))
        ) : (
          <p className={classes.p}>
            You did not mark any art pieces as favorites yet.
          </p>
        )}
      </ul>
    </div>
  );
}
