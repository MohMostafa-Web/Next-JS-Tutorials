import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  /* Create function to fetch data from created API route "/api/comments" as "GET" Request by default */
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  /* Create function to submit a comment to created API route "/api/comments" as "POST" Request */
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST", // "POST" Request
      body: JSON.stringify({ comment }), // "body" contains JSON data String
      headers: {
        "Content-Type": "application/json", // "headers" with "Content-Type" to specify data type as "application/json"
      },
    });
    const data = await response.json();
    console.log(data);
    fetchComments(); // retrieve comments
  };

  /* Create function to delete a comment by commentId */
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE", // "DELETE" Request
    });
    const data = await response.json();
    console.log(data);
    fetchComments(); // retrieve comments
  };

  return (
    <>
      {/* Submit a Comment */}
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit a Comment</button>
      </div>
      <br />
      {/* Fetch Comments */}
      <button onClick={fetchComments}>Load Comments</button>
      {comments?.map((comment) => (
        <div key={comment.id} style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ marginRight: "10px" }}>
            {comment.id}.{comment.text}
          </h3>
          {/* "Delete" button */}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default CommentsPage;
