"use client"

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
  if (items.length === 0)
    return (
      <div className="flex justify-center items-center p-6 bg-white rounded-lg  w-full gap-x-20 mt-6 text-xl font-semibold">
        This category is empty, do not leave it that way and add your question!
      </div>
    )
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
