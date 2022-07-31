import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  /* using "getSession()" and passing {req} as argument */
  const session = await getSession({ req });

  /* 
    Secure API Route "api/test-session"
      by Checking if session is null to specify the sent response
  */
  if (!session) {
    /* Make response with status code 401 and json data { error: "unauthenticated user" } */
    res.status(401).json({ error: "unauthenticated user" });
  } else {
    /* Make response with status code 200 and json data { message: "Success", session } */
    res.status(200).json({ message: "Success", session });
  }
};

export default handler;
