import { motion } from 'framer-motion'
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form'
import { Input, Separator } from "@mdm/ui"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import { FileInput } from '../components/file-input';

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const UploadStep = ({
  form,
  delta,
}:{
  form: UseFormReturn,
  delta: number,
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
                <FormLabel>Justificatif d&apos;identité de l'accompagnateur avec photo (carte d&apos;identité, passeport…) <RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileCnie" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        {/* GRADES */}
        <FormField
          control={form.control}
          name="fileParticipantNames"
          render={({ field }) => {
            initFileInput(field, "fileParticipantNames")

            return (
              <FormItem>
                <FormLabel>Liste des noms des participants <RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileParticipantNames" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>
    </motion.div>
  )
}