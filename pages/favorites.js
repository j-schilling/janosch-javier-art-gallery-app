import { useArtPieces } from "@/context/ArtPiecesContext";
import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import classes from "../components/ArtPieces/ArtPieces.module.css";

export default function Favorites({ globalData }) {
  const { artPiecesInfo } = useArtPieces();

  const favoritePieces = Object.entries(artPiecesInfo)
    .filter(([slug, info]) => info.isFavorite)
    .map(([slug, info]) => ({
      slug,
      ...info,
    }));

  return (
    <div>
      <h1>Favoritos</h1>
      <ul className={classes.ul}>
        {favoritePieces.length > 0 ? (
          favoritePieces.map((piece) => (
            <li className={classes.li} key={piece.slug}>
              <ArtPiecePreview {...piece} />
            </li>
          ))
        ) : (
          <p>No hay piezas marcadas como favoritas.</p>
        )}
      </ul>
    </div>
  );
}
