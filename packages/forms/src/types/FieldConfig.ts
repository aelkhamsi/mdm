import { z } from "zod";

type FieldOption = {
  label: string;

  value: any;
}

export type FieldConfig = {
  label: string;

  placeholder?: string|undefined;

  description?: string|undefined;

  options?: FieldOption[]|undefined;

  validationRule: z.AnyZodObject;

  defaultValue: any,

  render: any;
}