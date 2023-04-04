import { NextApiRequest, NextApiResponse } from "next";

let myHeaders = new Headers({
  "Access-Control-Allow-Origin": "*"
});


interface Data {
  content: string;
}

export default async function handler (req: NextApiRequest,
res: NextApiResponse<Data>)  {
  
  const content = await fetch('http://localhost:3001', { headers:myHeaders})
  const d=await  content.text()
  res.setHeader('Content-Type', 'text/html')
  return res.status(200).end(d)
}