"use client"

import { Category } from "@prisma/client"
import { IconType } from "react-icons"
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa"
import CategoryItem from "./category-item"

interface CategoriesProps {
  items: Category[]
}

const iconMap: Record<Category["name"], IconType> = {
  HTML: FaHtml5,
  CSS: FaCss3,
  Javascript: FaJs,
  React: FaReact,
}

const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap bg-white px-6 py-6 lg:max-w-sm rounded-lg shadow-md">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}

export default Categories
