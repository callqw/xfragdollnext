import { NextResponse } from "next/server";
import { selectAllData } from "@/controllers/data";
export async function GET(req: Request, context: any) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("blog");
  console.log(query, "context");

  let allData = await selectAllData();

  return NextResponse.json("222");
}
