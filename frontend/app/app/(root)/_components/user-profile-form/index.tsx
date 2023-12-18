"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSchema, TUserProfileForm } from "./schemas";
import { toast } from "sonner";
import { patchProfile } from "./actions";

/**
 * Always pass props as an object. It will be clean and namespaced. We can destructure it later.
 */
export function UserProfileForm(props: TUserProfileForm) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...props,
    },
  });
  async function onSubmit(payload: z.infer<typeof FormSchema>) {
    const { data, error } = await patchProfile(payload);
    if (error) {
      toast.error(error);
      return;
    } else if (data) {
      toast.success("Profile updated");
      form.reset(data);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 gap-2">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input placeholder="enter your first name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display first name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="enter your last name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display last name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={
            !form.formState.isValid ||
            form.formState.isSubmitting ||
            !form.formState.isDirty
          }
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
