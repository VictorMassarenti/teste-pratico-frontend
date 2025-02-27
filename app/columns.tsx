"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { formatPhoneNumber } from "@/lib/formatPhoneNumber";
import { Employee } from "@/types/employee";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import arrowDown from "@/public/charm_chevron-down.png";
import arrowUp from "@/public/charm_chevron-up.svg";

function isMobile() {
  return useIsMobile();
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "image",
    header: () => (
      <div
        className={`flex ${isMobile() ? "justify-start" : "justify-center"} `}
      >
        foto
      </div>
    ),
    cell: ({ row }) => (
      <div
        className={`flex ${isMobile() ? "justify-start" : "justify-center"} `}
      >
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
    enableGlobalFilter: false,
  },
  {
    accessorKey: "name",
    header: () => (
      <div
        className={`flex ${isMobile() ? "justify-start" : "justify-center"} `}
      >
        nome
      </div>
    ),
    cell: ({ row }) => (
      <div
        className={`flex ${isMobile() ? "justify-start" : "justify-center"} `}
      >
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: () => {
      if (!isMobile()) return null;
      return (
        <div className="flex justify-end items-center px-[28.5px]">
          <div className="w-2 h-2 rounded-full bg-secondary-foreground" />
        </div>
      );
    },
    cell: () => {
      if (!isMobile()) return null;
      return (
        <div className="flex justify-end items-center px-[16px]">
          <Image src={arrowDown} width={32} height={32} alt="arrow down" />
        </div>
      );
    },
    enableGlobalFilter: false,
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
    enableGlobalFilter: false,
  },
  {
    accessorKey: "phone",
    header: "telefone",
    cell: ({ row }) => <div>{formatPhoneNumber(row.getValue("phone"))}</div>,
  },
];
