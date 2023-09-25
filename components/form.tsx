"use client"

import {
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Combobox } from "./ui/combobox"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title is required",
    })
    .max(1000, {
      message: "Max 1000 characters",
    }),
  description: z
    .string()
    .min(1, {
      message: "Answer is required",
    })
    .max(1000, {
      message: "Max 1000 characters",
    }),
  categoryId: z.string().min(1, { message: "Category must be selected" }),
})

interface TableFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  categoryOptions: {
    label: string
    value: string
  }[]
}

const TableForm = ({ setOpen, categoryOptions }: TableFormProps) => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: "",
    },
  })

  const { isSubmitting } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    setOpen(false)
    try {
      await axios.post("/api/questions", values)
    } catch (error) {
      toast.error("error")
    }
    router.refresh()
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type a question</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g. 'What is Virtual DOM?'"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type a answer</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g. 'The Virtual DOM (VDOM) is an in-memory representation of Real DOM.'"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select a category</FormLabel>
                <FormControl>
                  <Combobox options={...categoryOptions} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <Button type="submit" disabled={isSubmitting}>
              Add question
            </Button>
          </AlertDialogFooter>
        </form>
      </Form>
    </>
  )
}

export default TableForm
