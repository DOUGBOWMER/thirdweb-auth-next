import { getUser } from "./auth/[...thirdweb]";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(400).json({
      message: "Invalid method.",
    });
  }

  const user = await getUser(req);

  if (!user) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }

  return res.status(200).json({
    message: "This is a secret... don't tell anyone.",
  });
};

export default handler;
