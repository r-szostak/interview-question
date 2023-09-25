import db from "@/lib/db"
import { Category, Question } from "@prisma/client"

type QuestionWithCategory = Question & {
  category: Category | null
}

type getQuestions = {
  categoryId?: string
  sortBy?: string
}
export const getQuestions = async ({
  categoryId,
  sortBy = "createdAt",
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
        [sortBy]: "desc",
      },
    })
    return questions
  } catch (error) {
    console.log("[GET_QUESTIONS]", error)
    return []
  }
}
