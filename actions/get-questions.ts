import { db } from "@/lib/db"
import { Category, Question } from "@prisma/client"

type QuestionWithCategory = Question & {
  category: Category | null
}

type getQuestions = {
  categoryId?: string
}
export const getQuestions = async ({
  categoryId,
}: getQuestions): Promise<QuestionWithCategory[]> => {
  try {
    const questions = await db.question.findMany({
      where: {
        categoryId,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
    return questions
  } catch (error) {
    console.log("[GET_QUESTIONS]", error)
    return []
  }
}
