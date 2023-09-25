import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function PATCH(
  req: Request,
  { params }: { params: { questionId: string } }
) {
  try {
    const { questionId } = params

    const question = await db.question.update({
      where: {
        id: questionId,
      },
      data: {
        rating: { increment: 1 },
      },
    })

    return NextResponse.json(question)
  } catch (error) {
    console.log("[QUESTION_ID]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
