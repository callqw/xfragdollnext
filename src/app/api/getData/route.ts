import { NextResponse } from "next/server";
import { selectAllData } from "@/controllers/data";
export async function GET() {
  let allData = await selectAllData();
  
 return NextResponse.json({ data: allData }, { status: 200 });
}
