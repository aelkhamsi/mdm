import { motion } from 'framer-motion'
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form'
import { Input, Separator } from "@mdm/ui"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import Link from 'next/link';
import { FileInput } from '../components/file-input';

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const UploadStep = ({
  form,
  delta,
  applicationStatus
}:{
  form: UseFormReturn,
  delta: number,
  applicationStatus: string
}) => {
  const initFileInput = (field: ControllerRenderProps, id: string) => {
    if (field?.value && field?.value.length) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(field?.value[0]);
      setTimeout(() => {
        const fileInputElement = document.querySelector(`#${id}`) as HTMLInputElement;
        fileInputElement.files = dataTransfer.files;
      }, 300)
    }
  }

  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Uploads
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Fournissez les documents personnels du/des participant(s)
        <Separator className='mt-4 bg-[#0284C7]'/>
      </p>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
        {/* CNIE */}
        <FormField
          control={form.control}
          name="fileCnie"
          render={({ field }) => {
            initFileInput(field, "fileCnie")

            return (
              <FormItem>
                <FormLabel>Justificatif d&apos;identité du participant avec photo (carte d&apos;identité, passeport…) <RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileCnie" />
                </FormControl>
                <FormDescription>
                  <span className="text-blue-500">Remarque</span>: Le document doit de préference être la CNIE ou le passeport. Sinon, vous pouvez envoyer tout document contenant les informations de l&apos;élève avec sa photo; ou bien son acte de naissance accompagné de sa photo dans le même PDF.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        {/* GRADES */}
        <FormField
          control={form.control}
          name="fileGrades"
          render={({ field }) => {
            initFileInput(field, "fileGrades")

            return (
              <FormItem>
                <FormLabel>Bulletin du premier semestre de l&apos;année scolaire courante 2024-2025<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileGrades" />
                </FormControl>
                <FormDescription>
                  <span className="text-blue-500">Remarque</span>: votre bulletin sera utilisé pour vérifier les notes que vous avez fournies précédemment.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>
    </motion.div>
  )
}