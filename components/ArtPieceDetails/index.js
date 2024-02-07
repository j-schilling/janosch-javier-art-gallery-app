import { Card, Image, Text, Group, Button, CardSection } from "@mantine/core";
import classes from "./ArtPieceDetails.module.css";
import Link from "next/link";
import { useArtPieces } from "@/context/ArtPiecesContext";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({ ...props }) {
  const {
    imageSource: image,
    name: title,
    artist,
    year,
    genre,
    slug,
    colors,
  } = props;
  const { addComment, artPiecesInfo, toggleFavorite } = useArtPieces();
  const isFavorite = artPiecesInfo[slug]?.isFavorite || false;
  const comments = artPiecesInfo[slug]?.comments || [];

  function onSubmitComment(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { commentInput } = Object.fromEntries(formData);

    addComment(props, commentInput);

    e.target.reset();
  }

  return (
    <div className={classes.details__container}>
      <Card withBorder padding="lg" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={500} />
        </Card.Section>

        <Group justify="space-between" mt="xl">
          <Text fz="sm" fw={700} className={classes.title}>
            {title}
          </Text>
        </Group>

        <Card.Section className={classes.footer}>
          <div>
            <Text size="xs" c="dimmed">
              Artist
            </Text>
            <Text fw={500} size="sm">
              {artist}
            </Text>
          </div>
          <div>
            <Text size="xs" c="dimmed">
              Year
            </Text>
            <Text fw={500} size="sm">
              {year}
            </Text>
          </div>
          <div>
            <Text size="xs" c="dimmed">
              Genre
            </Text>
            <Text fw={500} size="sm">
              {genre}
            </Text>
          </div>
        </Card.Section>
        <CardSection className={classes.colorcontainer}>
          {colors.map((color) => {
            return (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className={classes.color}
              ></div>
            );
          })}
        </CardSection>

        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => toggleFavorite(props)}
        />
      </Card>

      <Link href="/art-pieces">
        <Button className={classes.backbutton}>Back to overview</Button>
      </Link>
      <CommentForm onSubmitComment={onSubmitComment} />
      <Comments comments={comments} />
    </div>
  );
}
