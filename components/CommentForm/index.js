import { TextInput } from "@mantine/core";
import classes from "./CommentForm.module.css";
import { Button } from "@mantine/core";

export default function CommentForm({ onSubmitComment }) {
  return (
    <form className={classes.form} onSubmit={onSubmitComment}>
      <TextInput
        name="commentInput"
        label="Comment"
        placeholder="Write your comment here"
        className={classes.input}
        required={true}
      />
      <Button
        type="submit"
        className={classes.submitbutton}
        color="rgb(15, 88, 85)"
      >
        Send
      </Button>
    </form>
  );
}
