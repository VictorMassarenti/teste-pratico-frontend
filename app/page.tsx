import { getAllEmployees } from "@/actions/getAllEmployees";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

export default async function Home() {
  const { employees } = await getAllEmployees();

  if (!employees) throw new Error("Failed to fetch data");

  return (
    <div className="md:m-10 m-5">
      <DataTable columns={columns} data={employees} />
    </div>
  );
}
