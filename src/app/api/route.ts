import { NextResponse } from "next/server";
// import { selectAllData } from "@/controllers/data";
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
     return NextResponse.json({});
}