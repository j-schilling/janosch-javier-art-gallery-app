import { TextInput } from "@mantine/core";
import classes from "./CommentForm.module.css";

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
      <button type="submit" className={classes.submitbutton}>
        Send
      </button>
    </form>
  );
}
