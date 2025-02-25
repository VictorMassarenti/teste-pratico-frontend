"use server";

import { Employee } from "@/types/employee";
import { api } from "@/http/api-client";

export async function getAllEmployees() {
  try {
    const employees = await api.get("employees").json<Employee[]>();

    return { employees };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data" };
  }
}
