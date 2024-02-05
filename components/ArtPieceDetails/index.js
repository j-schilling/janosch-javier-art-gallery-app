import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "./ArtPieceDetails.module.css";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
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
    </Card>
  );
}
