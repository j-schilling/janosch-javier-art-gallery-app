import { ArtPiecePreview, CardWithStats } from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              artist={piece.artist}
              title={piece.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
