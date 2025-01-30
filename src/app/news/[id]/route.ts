import { NextResponse } from "next/server";
import { selectAllData } from "@/controllers/data";
export async function GET(req:Request,context:any) {
  // let allData = await selectAllData();
  console.log(context,'3');
  
 return NextResponse.json('blog1');
}
