import { Category, Question } from "@prisma/client"
import React from "react"
import QuestionCard from "./question-card"

type QuestionWithCategory = Question & {
  category: Category | null
}

interface QuestionsListProps {
  items: QuestionWithCategory[]
}

const QuestionsList = ({ items }: QuestionsListProps) => {
  console.log(items)
  return (
    <div className="grid grid-cols-1 gap-y-4 pt-6">
      {items.map((item) => (
        <QuestionCard
          key={item.id}
          questionId={item.id}
          title={item.title}
          description={item.description}
          rating={item.rating}
          category={item?.category?.name!}
        />
      ))}
    </div>
  )
}

export default QuestionsList
