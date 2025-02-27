"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import Image from "next/image";
import searchImage from "@/public/default.png";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import arrowDown from "@/public/charm_chevron-down.png";
import arrowUp from "@/public/charm_chevron-up.svg";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const isMobile = useIsMobile();

  const [globalFilter, setGlobalFilter] = useState<any>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-6">
        <h1 className="text-xl font-medium">Funcionários</h1>
        <div className="flex items-center bg-card pr-4 pl-1 h-12 border rounded-[8px] min-w-[287px]">
          <Input
            placeholder="Pesquisar"
            className="flex h-10 w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 shadow-none"
            onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          />
          <div>
            <Image src={searchImage} width={24} height={24} alt="Search Icon" />
          </div>
        </div>
      </div>

      <div className="bg-card border-3 border shadow rounded-t-[8px] overflow-hidden">
        <Table>
          <TableHeader className="bg-secondary">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className={`hover:bg-secondary h-[47px]`}
              >
                {headerGroup.headers
                  .slice(0, isMobile ? 3 : headerGroup.headers.length)
                  .map((header, index) => {
                    const isFirstElement = index === 0;
                    return (
                      <TableHead
                        key={header.id}
                        className={`uppercase text-base text-secondary-foreground ${
                          isFirstElement && isMobile ? "pl-[14.5px]" : ""
                        }`}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="text-base font-normal"
                >
                  {row
                    .getVisibleCells()
                    .slice(0, isMobile ? 3 : row.getVisibleCells().length)
                    .map((cell, index) => {
                      const isFirstElement = index === 0;
                      return (
                        <TableCell
                          key={cell.id}
                          className={`${
                            isFirstElement && isMobile
                              ? "pl-[14.5px] pr-0"
                              : "pl-0"
                          }`}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sem resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
