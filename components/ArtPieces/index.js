import { ArtPiecePreview } from "../ArtPiecePreview";
import classes from "./ArtPieces.module.css";

export default function ArtPieces({ pieces }) {
  return (
    <ul className={classes.ul}>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug} className={classes.li}>
            <ArtPiecePreview {...piece} />
          </li>
        );
      })}
    </ul>
  );
}
