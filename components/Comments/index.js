import { Text, Group, TypographyStylesProvider, Paper } from "@mantine/core";
import classes from "./Comments.module.css";

export default function Comments({ comments }) {
  return (
    <ul>
      {comments.length > 0 ? (
        comments.map((comment, index) => {
          return (
            <div key={index} className={classes.comments__container}>
              <Paper withBorder radius="md" className={classes.comment}>
                <div>
                  <Group>
                    <Text fz="md" c="dimmed">
                      {comment.date}
                    </Text>
                    <Text fz="md" c="dimmed">
                      {comment.time}
                    </Text>
                  </Group>
                </div>
                <TypographyStylesProvider className={classes.body}>
                  <div className={classes.content} />
                  <p>{comment.comment}</p>
                </TypographyStylesProvider>
              </Paper>
            </div>
          );
        })
      ) : (
        <p>There is no comments to show.</p>
      )}
    </ul>
  );
}
