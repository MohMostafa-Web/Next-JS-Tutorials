/* Create function to handle incoming request and respond with a json text */
export default function handler(req, res) {
  /*
    using "status(code)" to set status code,
    using "json(json data)" to set json data as response
  */
  res.status(200).json({ name: "Home API route" }); 
}
