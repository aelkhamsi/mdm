import { isValidPhoneNumber } from "react-phone-number-input";
import { ZodSchema, z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/png','image/jpeg','image/jpg', 'image/png','image/webp', 'application/pdf'];
const zodFileValidation = z.any()
  .refine(files => files?.length == 1, 'Ce fichier est obligatoire.')
  .refine(files => files ? ACCEPTED_FILE_TYPES.includes(files[0]?.type) : true, { message: 'Please choose PNG, JPEG or PDF format files only' })
  .refine(files => files ? files[0]?.size <= MAX_UPLOAD_SIZE : true, 'File size must be less than 3MB')

export const groupApplicationSchema: ZodSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  dateOfBirth: z.date({ required_error: "A date of birth is required." }),
  identityCardNumber: z.string().min(1).max(50),
  city: z.string().min(1).max(50),
  region: z.string().nonempty("Please select an option"),
  phoneNumber: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),

  termsAgreement: z.boolean().default(false).refine(value => value === true, { message: "Vous devez accepter les Conditions Générales."}),
})

export const getGroupApplicationDefaultValues = (userData: any) => ({
  firstName: userData?.firstName || "",
  lastName: userData?.lastName || "",
  dateOfBirth: "",
  identityCardNumber: "",
  city: "",
  region: "",
  phoneNumber: "",

  termsAgreement: false,
})