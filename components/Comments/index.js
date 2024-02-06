import { Text, Group } from "@mantine/core";
import classes from "./Comments.module.css";

export default function Comments({ comments }) {
  return (
    <div className={classes.comments}>
      <Group>
        <div>
          <Text size="xs" c="dimmed">
            date
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        loremefsefewfewf loremefsefewfewf loremefsefewfewf loremefsefewfewf
        loremefsefewfewf loremefsefewfewfloremefsefewfewf loremefsefewfewf
        loremefsefewfewfloremefsefewfewf loremefsefewfewf loremefsefewfewf
      </Text>
    </div>
  );
}
