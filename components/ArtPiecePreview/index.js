import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "./ArtPiecePreview.module.css";
import Link from "next/link";
import { useArtPieces } from "@/context/ArtPiecesContext";
import FavoriteButton from "../FavoriteButton";

export function ArtPiecePreview({ ...props }) {
  const { imageSource: image, name: title = "", artist, slug } = props;
  const { artPiecesInfo, toggleFavorite } = useArtPieces();
  const isFavorite = artPiecesInfo[slug]?.isFavorite || false;

  return (
    <>
      <Link href={`/art-pieces/${slug}`} className={classes.detaillink}>
        <Card withBorder padding="lg" className={classes.card}>
          <Card.Section>
            <Image src={image} alt={title} height={300} />
          </Card.Section>

          <Group justify="space-between" mt="xl">
            <Text fz="sm" fw={700} className={classes.title}>
              {title}
            </Text>
            <Group gap={5}>
              <Text fz="sm" fw={700}>
                {artist}
              </Text>
            </Group>
          </Group>
        </Card>
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => toggleFavorite(props)}
      />
    </>
  );
}
