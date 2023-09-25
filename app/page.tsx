import Navbar from "@/components/navbar"
import InfoCard from "@/components/info-card"
import Categories from "@/components/categories"
import { getQuestions } from "@/actions/get-questions"
import QuestionsList from "@/components/questions-list"
import { getCategories } from "@/actions/get-categories"

export const dynamic = "force-dynamic"
interface HomePageProps {
  searchParams: {
    categoryId: string
  }
}

export default async function Home({ searchParams }: HomePageProps) {
  const categories = await getCategories()

  const questions = await getQuestions({
    ...searchParams,
  })

  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10  max-w-7xl  min-h-screen mx-auto px-2 py-4 md:p-20">
      <div className="flex lg:flex-col gap-y-6 gap-x-6 justify-center lg:justify-normal flex-1">
        <InfoCard />
        <Categories items={categories} />
      </div>
      <div className="flex flex-col lg:col-span-3">
        <div>
          <Navbar items={categories} numberOfQuestions={questions.length} />
        </div>
        <QuestionsList items={questions} />
      </div>
    </main>
  )
}
