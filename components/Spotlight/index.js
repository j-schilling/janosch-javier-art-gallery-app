import { useEffect, useState } from "react";
import { Card, Image, Text, Group } from "@mantine/core";
import classes from "./Spotlight.module.css";
import { useArtPieces } from "@/context/ArtPiecesContext";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight(props) {
  const { artPiecesInfo, toggleFavorite } = useArtPieces();
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  useEffect(() => {
    function getRandom(max) {
      return Math.floor(Math.random() * max);
    }
    const arrayLength = Object.entries(props).length;
    const randomIndex = getRandom(arrayLength);
    const randomObjectElement = props[randomIndex];

    setRandomArtPiece(randomObjectElement);
  }, [props]);

  if (!randomArtPiece) return null;

  const { imageSource, artist, name, slug } = randomArtPiece;
  const isFavorite = artPiecesInfo[slug]?.isFavorite || false;

  return (
    <div className={classes.spotlight}>
      <Card withBorder padding="lg" className={classes.card}>
        <Card.Section>
          <Image src={imageSource} alt={name} height={400} />
        </Card.Section>

        <Group justify="space-between" mt="xl">
          <Text fz="sm" fw={700}>
            {artist}
          </Text>
        </Group>
      </Card>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={(e) => {
          e.preventDefault();
          toggleFavorite(randomArtPiece);
        }}
      />
    </div>
  );
}
