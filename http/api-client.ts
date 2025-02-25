"use server";

import ky from "ky";

export const api = ky.create({
  prefixUrl: process.env.API_URL || "http://localhost:3000",
});
