"use client";

import { formatPhoneNumber } from "@/lib/formatPhoneNumber";
import { Employee } from "@/types/employee";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "image",
    header: () => <div className="flex justify-center">foto</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <div className="w-[34px] h-[34px] overflow-hidden rounded-full">
          <Image
            src={row.getValue("image")}
            alt="foto do funcionário"
            width={34}
            height={34}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "nome",
  },
  {
    accessorKey: "job",
    header: "cargo",
  },
  {
    accessorKey: "admission_date",
    header: "data de admissão",
    cell: ({ row }) => (
      <div>
        {new Date(row.getValue("admission_date")).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: "telefone",
    cell: ({ row }) => <div>{formatPhoneNumber(row.getValue("phone"))}</div>,
  },
];
