import { FieldConfig } from "@/types/FieldConfig";

export type FormConfig = {
  id: string;

  fields: FieldConfig[]
}

export type FormsConfig = FormConfig[]