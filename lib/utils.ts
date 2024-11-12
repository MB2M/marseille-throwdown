import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError, ZodIssue } from "zod";
import { fromZodError } from "zod-validation-error";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ActionHandler = <T extends (...args: any[]) => any>(
  cb: T,
) => (
  ...args: Parameters<T>
) => Promise<
  | { success: true; data: Awaited<ReturnType<T>> }
  | { success: false; message: string | ZodIssue[] }
>;
export const actionHandler: ActionHandler =
  (cb) =>
  async (...args) => {
    try {
      return { success: true, data: await cb(...args) };
    } catch (error: unknown) {
      // console.error(error);
      if (error instanceof ZodError) {
        console.log(fromZodError(error).details);
        return {
          success: false,
          message: fromZodError(error).details,
        };
      }
      return {
        success: false,
        message: "An error occurred",
      };
    }
  };
