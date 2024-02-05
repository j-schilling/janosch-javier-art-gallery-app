import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "./ArtPiecePreview.module.css";

export function ArtPiecePreview({ image, title, artist }) {
  return (
    <Card withBorder padding="lg" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={400} />
      </Card.Section>

      <Group justify="space-between" mt="xl">
        <Text fz="sm" fw={700} className={classes.title}>
          {title}
        </Text>
        <Group gap={5}>
          <Text fz="xs" c="dimmed">
            {artist}
          </Text>
        </Group>
      </Group>
    </Card>
  );
}
