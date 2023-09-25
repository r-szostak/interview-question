"use client"

import { Category } from "@prisma/client"
import Modal from "./modal"
import SortBy from "./sort-by"

interface NavbarProps {
  items: Category[]
  numberOfQuestions: number | null
}

const Navbar = ({ items, numberOfQuestions }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center p-6 bg-[#172554] rounded-lg shadow-md w-full">
      <div className="flex text-md text-white gap-x-8 ">
        <p>{numberOfQuestions} Questions</p>
        <SortBy />
      </div>
      <Modal items={items} />
    </div>
  )
}

export default Navbar
