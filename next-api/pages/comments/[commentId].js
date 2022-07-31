import { comments } from "../../data/comments";

function SingleCommentPage({ comment }) {
  return (
    <>
      <h3>
        {comment.id}. {comment.text}
      </h3>
    </>
  );
}

export default SingleCommentPage;

/* using SSG */
export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { commentId } = context.params;

  const comment = comments.find((c) => c.id == commentId);

  /*
    // Not recommended to do this to save time loading, and data is already available in Project folder
    const response = await fetch(
      `http://localhost:3000/api/comments/${commentId}`
    );
    const data = await response.json();
  */

  return {
    props: {
      comment,
    },
  };
}
