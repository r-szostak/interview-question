import db from "@/lib/db"

type getCategories = {
  orderby?: string
}

export const getCategories = async () => {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        name: "asc",
      },
    })
    return categories
  } catch (error) {
    console.log("[GET_CATEGORIES]", error)
    return []
  }
}
