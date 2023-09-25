"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { FaChevronUp } from "react-icons/fa"

interface RatingProps {
  rating: number
  questionId: string
}

const Rating = ({ rating, questionId }: RatingProps) => {
  const router = useRouter()

  const onVote = async () => {
    try {
      await axios.patch(`/api/questions/${questionId}`)
      router.refresh()
    } catch (error) {}
  }

  return (
    <>
      <div onClick={onVote} className="hover:text-sky-600">
        <FaChevronUp />
      </div>
      {rating}
    </>
  )
}

export default Rating
