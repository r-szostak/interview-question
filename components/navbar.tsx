import { Category } from "@prisma/client"
import Modal from "./modal"
import SortBy from "./sort-by"
import { BsPatchQuestionFill } from "react-icons/bs"

interface NavbarProps {
  items: Category[]
  numberOfQuestions: number | null
}

const Navbar = ({ items, numberOfQuestions }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center p-6 bg-[#172554] rounded-lg shadow-md w-full">
      <div className="flex text-md text-white  justify-center items-center ">
        <div className="flex items-center justify-center">
          {" "}
          <BsPatchQuestionFill size={36} />
          <p className="ml-2 text-xl font-bold">
            {numberOfQuestions} Questions
          </p>
        </div>
      </div>
      <SortBy />
      <Modal items={items} />
    </div>
  )
}

export default Navbar
