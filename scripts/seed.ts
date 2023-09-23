const { PrismaClient } = require("@prisma/client")

const database = new PrismaClient()

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript" },
        { name: "React" },
      ],
    })
    console.log("Success")
  } catch (error) {
    console.log("Error seeding db", error)
  } finally {
    await database.$disconnect()
  }
}

async function question() {
  try {
    await database.question.createMany({
      data: [
        {
          title: "pytanie1",
          description: "pytanie1",
          rating: 0,
          categoryId: "a6aa9d83-865f-401f-9001-5371a58fcf58",
        },
        {
          title: "pytanie2",
          description: "pytanie2",
          rating: 3,
          categoryId: "a6aa9d83-865f-401f-9001-5371a58fcf58",
        },
      ],
    })
    console.log("Success")
  } catch (error) {
    console.log("Error seeding db", error)
  } finally {
    await database.$disconnect()
  }
}

question()
