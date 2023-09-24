import Navbar from "@/components/navbar"
import InfoCard from "@/components/info-card"

import Categories from "@/components/categories"
import { db } from "@/lib/db"
import { getQuestions } from "@/actions/get-questions"
import QuestionsList from "@/components/questions-list"

interface HomePageProps {
  searchParams: {
    categoryId: string
  }
}

export default async function Home({ searchParams }: HomePageProps) {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  })

  const questions = await getQuestions({
    ...searchParams,
  })

  console.log(questions)
  return (
    <main className="flex flex-row gap-x-16  lg:flex-nowrap flex-wrap max-w-7xl  min-h-screen mx-auto p-20">
      <div className="flex flex-col gap-y-6 basis-1/4">
        <InfoCard />
        <Categories items={categories} />
      </div>
      <div className="flex flex-col basis-3/4 ">
        <div>
          <Navbar items={categories} />
        </div>
        <QuestionsList items={questions} />
      </div>
    </main>
  )
}
