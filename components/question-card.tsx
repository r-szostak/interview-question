import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Rating from "./rating"

interface QuestionCardProps {
  title: string
  description: string
  rating: number
  category: string
  questionId: string
}

const QuestionCard = ({
  title,
  description,
  rating,
  category,
  questionId,
}: QuestionCardProps) => {
  return (
    <div className="flex justify-between items-center p-6 bg-white rounded-lg  w-full gap-x-20 text-justify">
      <div className="flex flex-col ">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        </Accordion>

        {category && (
          <div className="py-1 px-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 border rounded-lg w-fit">
            {category}
          </div>
        )}
      </div>
      <div className="py-4 px-3 bg-slate-100 border rounded-lg flex flex-col items-center justify-center">
        <Rating rating={rating} questionId={questionId} />
      </div>
    </div>
  )
}

export default QuestionCard
