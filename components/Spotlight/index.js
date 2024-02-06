import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "./Spotlight.module.css";

export default function Spotlight(props) {
  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
  const arrayLength = Object.entries(props).length;
  const randomIndex = getRandom(arrayLength);
  const randomObjectElement = props[randomIndex];

  const { imageSource, artist, name } = randomObjectElement;

  return (
    <div className={classes.spotlight}>
      <Card withBorder padding="lg" className={classes.card}>
        <Card.Section>
          <Image src={imageSource} alt={name} height={500} />
        </Card.Section>

        <Group justify="space-between" mt="xl">
          <Text fz="sm" fw={700}>
            {artist}
          </Text>
        </Group>
      </Card>
    </div>
  );
}
