"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newFile } from "./actions";

export const UploadFile = () => {
  return (
    <form className="flex flex-col gap-2" action={newFile}>
      <Input type="text" name="name" placeholder="name" />
      <Input type="file" name="file" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
