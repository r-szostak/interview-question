"use client"

import TableForm from "@/components/form"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Category } from "@prisma/client"
import { useState } from "react"

interface ModalProps {
  items: Category[]
}

const Modal = ({ items }: ModalProps) => {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" aria-controls="radix-:Rpmcq:">
          Add new question
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add new question</AlertDialogTitle>
          <AlertDialogDescription>
            Type in your recruitment question and answer
          </AlertDialogDescription>
        </AlertDialogHeader>
        <TableForm
          setOpen={setOpen}
          categoryOptions={items.map((category) => ({
            label: category.name,
            value: category.id,
          }))}
        />
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Modal
