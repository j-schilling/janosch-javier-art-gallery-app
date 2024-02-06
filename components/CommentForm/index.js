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
      />
      <button type="submit" className={classes.submitbutton}>
        Submit
      </button>
    </form>
  );
}
