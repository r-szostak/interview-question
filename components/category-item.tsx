"use client"

import { cn } from "@/lib/utils"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import React from "react"
import { IconType } from "react-icons"
import qs from "query-string"

interface CategoryItemProps {
  label: string
  value?: string
  icon?: IconType
}

const CategoryItem = ({ label, value, icon: Icon }: CategoryItemProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategoryId = searchParams.get("categoryId")
  const isSelected = currentCategoryId === value

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: isSelected ? null : value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    )

    router.push(url)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-3 text-sm font-semibold text-slate-700 bg-slate-200/20 border border-slate-200 rounded-xl flex items-center gap-x-1 hover:border-slate-900 transition",
        isSelected && "border-slate-900 bg-slate-700 text-white"
      )}
    >
      {Icon && <Icon size={20} />} <div className="truncate">{label}</div>
    </button>
  )
}

export default CategoryItem
