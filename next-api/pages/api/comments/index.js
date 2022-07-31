import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") { // If it is a "GET" Request
    res.status(200).json(comments);
  } else if (req.method === "POST") { // If it is a "POST" Request
    /* Get sent data "comment", then add it to comments */
    const comment = req.body.comment;
    const newComment = { id: Date.now(), text: comment };
    comments.push(newComment);
    /* Make response with a new comment to know user that it's successfully added */
    res.status(201).json(newComment);
  }
}
