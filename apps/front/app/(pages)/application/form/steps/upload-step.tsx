import { motion } from 'framer-motion'
import { UseFormReturn } from 'react-hook-form'
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
import { useActivityChoice } from '@/app/(pages)/application/hooks/use-activity-choices';
import { useAge } from '@/app/(pages)/application/hooks/use-age';

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const UploadStep = ({
  form,
  delta,
}:{
  form: UseFormReturn,
  delta: number
}) => {
  const {
    isMathSprint,
    isBestMathVideo,
    isStand
  } = useActivityChoice(form);
  const {
    isAdult
  } = useAge(form)

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

      {/* MATH SPRINT */}
      {isMathSprint && (
        <>
          <h2 className='mt-6 text-sm font-semibold leading-5 text-black'>
            {isMathSprint && isBestMathVideo
              ? (<><span className='text-2xl'>🏁</span> Math Sprint <span className='mx-2 font-light'>|</span> <span className='text-2xl'>📽️</span> Best Math Video</>)
              : (<><span className='text-2xl'>🏁</span> Math Sprint</>)
            }
            
          </h2>
          <Separator className='mt-1 bg-black'/>

          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
            {/* CNIE */}
            <FormField
              control={form.control}
              name="fileCnie"
              render={({ field }) => {
                if (field?.value && field?.value.length) {
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(field?.value[0]);
                  setTimeout(() => {
                    const fileInputElement = document.querySelector('#fileCnie') as HTMLInputElement;
                    fileInputElement.files = dataTransfer.files;
                  }, 300)
                }

                return (
                  <FormItem>
                    <FormLabel>Justificatif d&apos;identité du participant avec photo (carte d&apos;identité, passeport…) <RequiredAsterisk /></FormLabel>
                    <FormControl>
                    <Input
                      {...form.register("fileCnie", {
                        required: "Ce document est obligatoire",
                      })}
                      id="fileCnie"
                      type="file"
                    />
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
                if (field?.value && field?.value.length) {
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(field?.value[0]);
                  setTimeout(() => {
                    const fileInputElement = document.querySelector('#fileGrades') as HTMLInputElement;
                    fileInputElement.files = dataTransfer.files;
                  }, 300)
                }

                return (
                  <FormItem>
                    <FormLabel>Bulletin du premier semestre de l&apos;année scolaire courante 2024-2025<RequiredAsterisk /></FormLabel>
                    <FormControl>
                      <Input
                        {...form.register("fileGrades", {
                          required: "Ce document est obligatoire",
                        })}
                        id="fileGrades"
                        placeholder="id"
                        type="file"
                      />
                    </FormControl>
                    <FormDescription>
                      <span className="text-blue-500">Remarque</span>: votre bulletin sera utilisé pour vérifier les notes que vous avez fournies précédemment.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            {/* PARENTAL AUTHORIZATION */}
            {!isAdult &&
              <FormField
                control={form.control}
                name="fileParentalAuthorization"
                render={({ field }) => {
                  if (field?.value && field?.value.length) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(field?.value[0]);
                    setTimeout(() => {
                      const fileInputElement = document.querySelector('#fileParentalAuthorization') as HTMLInputElement;
                      fileInputElement.files = dataTransfer.files;
                    }, 300)
                  }

                  return (
                    <FormItem>
                      <FormLabel>Autorisation parentale signée et légalisée par le tuteur légal (<Link className="text-blue-500 underline" href='https://drive.google.com/file/d/15xD6J3oTd8pBoO5AS8BU-kOvJvvT77N1/view?usp=sharing' target="_blank">fichier</Link>)<RequiredAsterisk /></FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("fileParentalAuthorization", {
                            required: "Ce document est obligatoire",
                          })}
                          id="fileParentalAuthorization"
                          placeholder="id"
                          type="file"                    
                        />
                      </FormControl>
                      <FormDescription>
                          <span className="text-blue-500">Remarque</span>: il faut l&apos;imprimer, la signer à la main, la légaliser, puis la scanner; <span className="font-bold">la légalisation est obligatoire</span>.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
            }
          </div>
        </>
      )}


      {/* BEST MATH VIDEO */}
      {(isBestMathVideo && !isMathSprint) && (
        <>
          <h2 className='mt-6 text-sm font-semibold leading-5 text-black'>
            <span className='text-2xl'>📽️</span> Best Math Video
          </h2>
          <Separator className='mt-1 bg-black'/>

          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
            {/* CNIE */}
            <FormField
              control={form.control}
              name="fileCnie"
              render={({ field }) => {
                if (field?.value && field?.value.length) {
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(field?.value[0]);
                  setTimeout(() => {
                    const fileInputElement = document.querySelector('#fileCnie') as HTMLInputElement;
                    fileInputElement.files = dataTransfer.files;
                  }, 300)
                }

                return (
                  <FormItem>
                    <FormLabel>Justificatif d&apos;identité du participant avec photo (carte d&apos;identité, passeport…) <RequiredAsterisk /></FormLabel>
                    <FormControl>
                    <Input
                      {...form.register("fileCnie", {
                        required: "Ce document est obligatoire",
                      })}
                      id="fileCnie"
                      type="file"
                    />
                    </FormControl>
                    <FormDescription>
                      <span className="text-blue-500">Remarque</span>: Le document doit de préference être la CNIE ou le passeport. Sinon, vous pouvez envoyer tout document contenant les informations de l&apos;élève avec sa photo; ou bien son acte de naissance accompagné de sa photo dans le même PDF.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            {/* PARENTAL AUTHORIZATION */}
            {!isAdult &&
              <FormField
                control={form.control}
                name="fileParentalAuthorization"
                render={({ field }) => {
                  if (field?.value && field?.value.length) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(field?.value[0]);
                    setTimeout(() => {
                      const fileInputElement = document.querySelector('#fileParentalAuthorization') as HTMLInputElement;
                      fileInputElement.files = dataTransfer.files;
                    }, 300)
                  }

                  return (
                    <FormItem>
                      <FormLabel>Autorisation parentale signée et légalisée par le tuteur légal (<Link className="text-blue-500 underline" href='https://drive.google.com/file/d/15xD6J3oTd8pBoO5AS8BU-kOvJvvT77N1/view?usp=sharing' target="_blank">fichier</Link>)<RequiredAsterisk /></FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("fileParentalAuthorization", {
                            required: "Ce document est obligatoire",
                          })}
                          id="fileParentalAuthorization"
                          placeholder="id"
                          type="file"                    
                        />
                      </FormControl>
                      <FormDescription>
                          <span className="text-blue-500">Remarque</span>: il faut l&apos;imprimer, la signer à la main, la légaliser, puis le scanner; <span className="font-bold">la légalisation est obligatoire</span>.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
            }
          </div>
        </>
      )}


      {/* STAND */}
      {isStand && (
        <>
          <h2 className='mt-6 text-sm font-semibold leading-5 text-black'>
            <span className='text-2xl'>🎤</span> Stand
          </h2>
          <Separator className='mt-1 bg-black'/>

          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
            {/* CNIE */}
            <FormField
              control={form.control}
              name="fileMembersCnie"
              render={({ field }) => {
                if (field?.value && field?.value.length) {
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(field?.value[0]);
                  setTimeout(() => {
                    const fileInputElement = document.querySelector('#fileMembersCnie') as HTMLInputElement;
                    fileInputElement.files = dataTransfer.files;
                  }, 300)
                }

                return (
                  <FormItem>
                    <FormLabel>Justificatif d&apos;identité des participants (carte d&apos;identité, passeport…) <RequiredAsterisk /></FormLabel>
                    <FormControl>
                    <Input
                      {...form.register("fileMembersCnie", {
                        required: "Ce document est obligatoire",
                      })}
                      id="fileMembersCnie"
                      type="file"
                    />
                    </FormControl>
                    <FormDescription>
                      <span className="text-blue-500">Remarque</span>: Le document doit de préférence être la CNIE ou le passeport. Si l&apos;équipe se compose de plusieurs personnes, veuillez <span className="font-bold">fusionner tous les justificatifs d&apos;identité</span> des participants dans le même PDF.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
        </>
      )}
    </motion.div>
  )
}