import { db } from "@/lib/db"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { title, description, categoryId } = await req.json()
    const question = await db.question.create({
      data: {
        title,
        description,
        categoryId,
      },
    })
    return NextResponse.json(question)
  } catch (error) {
    console.log("[QUESTIONS]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
