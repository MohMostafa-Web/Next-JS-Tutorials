import { comments } from "../../../data/comments";

export default function handler(req, res) {
  /* using "req.query" to get value of dynamic API route "commentId" */
  const { commentId } = req.query;

  if (req.method === "GET") { // If it is a "GET" Request
    /* Get the value of matched id "comment" */
    const comment = comments.find((c) => c.id == commentId);
    /* Make resonse with json String data */
    if(comment) {
      res.status(200).json(comment);
    } else {
      res.status(200).json({});
    }
  } else if (req.method === "DELETE") { // If it is a "DELETE" Request
    /* Get the value of matched id "comment" */
    const deletedComment = comments.find((c) => c.id == commentId);
    /* Get the index of matched id "comment" */
    const deletedCommentIndex = comments.findIndex((c) => c.id == commentId);
    /* using "Array.splice()" to update Array "comments" by removing the "deletedComment" value */
    comments.splice(deletedCommentIndex, 1);
    /* Make resonse with json String data */
    res.status(200).json(deletedComment);
  } 
}
