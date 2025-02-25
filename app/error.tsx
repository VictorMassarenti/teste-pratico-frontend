"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>Ops, algo deu errado!</h2>
      <Button variant={"default"} onClick={() => reset()}>
        Tente novamente mais tarde.
      </Button>
    </div>
  );
}
