// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  var re: string = req.query.path?.toString() ?? "";
  await res.revalidate("/blogs");
  await res.revalidate("/blogs/" + re);
}
