import Navbar from "@/components/navbar"
import InfoCard from "@/components/info-card"

import Categories from "@/components/categories"
import { db } from "@/lib/db"

export default async function Home() {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  })
  return (
    <main className="flex flex-row gap-x-16  lg:flex-nowrap flex-wrap max-w-7xl  min-h-screen mx-auto p-20">
      <div className="flex flex-col gap-y-6 basis-1/4">
        <InfoCard />
        <Categories items={categories} />
      </div>
      <div className="flex flex-col basis-3/4 ">
        <div>
          <Navbar />
        </div>
        <div>questionslists</div>
      </div>
    </main>
  )
}
