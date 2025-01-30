import { NextResponse } from "next/server";
import { selectAllData } from "@/controllers/data";
export async function GET(req: Request, { params }: any) {
 console.log(params,'[[');
 
  return NextResponse.json("id");
}
