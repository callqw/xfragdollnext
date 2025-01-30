import { NextResponse } from "next/server";
import { selectAllData } from "@/controllers/data";
export async function GET(req:Request) {
  // let allData = await selectAllData();
  console.log('3');
  
 return NextResponse.json('blog');
}
