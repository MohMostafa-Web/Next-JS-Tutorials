export default function handler(req, res) {
  return res.status(200).json({
    dashboard: {
      posts: 5,
      likes: 100,
      followers: 20,
      following: 50,
    },
  });
}
