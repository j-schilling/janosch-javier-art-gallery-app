import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
} from "@mantine/core";
import classes from "./Comments.module.css";

export default function Comments({ comments }) {
  return (
    <div className={classes.comments__container}>
      <Paper withBorder radius="md" className={classes.comment}>
        <div>
          <Text fz="md" c="dimmed">
            10 minutes ago
          </Text>
        </div>
        <TypographyStylesProvider className={classes.body}>
          <div className={classes.content} />
          <p>
            I use{" "}
            <a
              href="https://heroku.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Heroku
            </a>{" "}
            to host my Node.js application, but MongoDB add-on appears to be too{" "}
            <strong>expensive</strong>. I consider switching to{" "}
            <a
              href="https://www.digitalocean.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Digital Ocean
            </a>{" "}
            VPS to save some cash.
          </p>
        </TypographyStylesProvider>
      </Paper>
    </div>
  );
}
