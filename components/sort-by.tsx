"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import qs from "query-string"

const options = [
  { value: "rating", label: "Rating" },
  { value: "createdAt", label: "Newest" },
]

const SortBy = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategoryId = searchParams.get("categoryId")

  const onChange = (value: string) => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          sortBy: value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    )
    router.push(url)
  }

  return (
    <div className="flex justify-center items-center gap-x-3">
      <p className="text-white font-bold text-sm">Sort by:</p>
      <Select
        onValueChange={(value) => onChange(value)}
        defaultValue="createdAt"
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" className="" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SortBy
