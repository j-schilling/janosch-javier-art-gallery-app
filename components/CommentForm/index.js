import { TextInput } from "@mantine/core";
import classes from "./CommentForm.module.css";

export default function CommentForm({ onSubmitComment }) {
  return (
    <form className={classes.form}>
      <TextInput
        label="Comment"
        placeholder="Write your comment here"
        className={classes.input}
      />
      <button
        type="submit"
        onSubmit={onSubmitComment}
        className={classes.submitbutton}
      >
        Submit
      </button>
    </form>
  );
}
