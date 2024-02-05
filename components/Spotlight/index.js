import { ArtPiecePreview } from "../ArtPiecePreview";
import classes from "./Spotlight.module.css";

export default function Spotlight(props) {
  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
  const arrayLength = Object.entries(props).length;
  const randomIndex = getRandom(arrayLength);
  const randomObjectElement = props[randomIndex];

  const { imageSource, artist } = randomObjectElement;

  return (
    <div className={classes.spotlight}>
      <ArtPiecePreview image={imageSource} artist={artist} />
    </div>
  );
}
