import { FieldConfig } from "@/types/FieldConfig";

export type FormStepConfig = {
  id: string;

  title: string;

  description: string;

  fields: FieldConfig<any>[]
}

export type FormConfig = {
  id: string;

  formSteps: FormStepConfig[]
}

export type FormsConfig = FormConfig[]