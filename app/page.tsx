import { getAllEmployees } from "@/http/get-employee";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

export default async function Home() {
  const { employees } = await getAllEmployees();

  return (
    <div className="md:m-10 m-5">
      <DataTable columns={columns} data={employees} />
    </div>
  );
}
