import { Employee } from "@/types/employee";
import { api } from "@/http/api-client";

export async function getAllEmployees() {
  const employees = await api.get("employees").json<Employee[]>();

  return { employees };
}
