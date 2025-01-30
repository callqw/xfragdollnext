import { NextResponse } from "next/server";
import { newsHtml } from "@/controllers/news";
export async function GET(req:any) {
  let newsData = await newsHtml(req);
 return NextResponse.json(newsData);
}
