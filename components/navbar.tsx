"use client"

import { Category } from "@prisma/client"
import Modal from "./modal"

interface NavbarProps {
  items: Category[]
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center p-6 bg-[#172554] rounded-lg shadow-md w-full">
      <div className="flex text-md text-white gap-x-8 ">
        <p>6 Suggestions</p>
        <p> Sort by: Most upvotes</p>
      </div>
      <Modal items={items} />
    </div>
  )
}

export default Navbar
