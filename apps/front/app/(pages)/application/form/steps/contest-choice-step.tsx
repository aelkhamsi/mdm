import { motion } from 'framer-motion'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import { Separator } from '@mdm/ui'
import { Checkbox } from '@mdm/ui'

const choices = [
  {
    value: "math_sprint",
    label: "Math Sprint",
  },
  {
    value: "prix_de_recherche",
    label: "Prix de recherche",
  },
  {
    value: "stand",
    label: "Stand",
  },
] as const

export const ContestChoiceStep = ({
  delta,
  form
}:{
  delta: number,
  form: UseFormReturn
}) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Choix de compétition
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Choisissez les compétitions auxquelles vous voulez participer
        <Separator className='mt-4 bg-[#0284C7]'/>
      </p>

      <div className='flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:justify-center mt-8'>
        <FormField
            control={form.control}
            name="choices"
            render={() => (
              <FormItem>
                {choices.map((choice) => (
                  <FormField
                    key={choice.value}
                    control={form.control}
                    name="choices"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={choice.value}
                          className="flex flex-column items-center space-x-3 space-y-0"
                        >
                          <FormLabel className="font-normal cursor-pointer">
                            <div className='p-4 bg-gray-100'>
                              {choice.label}
                            </div>
                          </FormLabel>

                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(choice.value)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, choice.value])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: any) => value !== choice.value
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

        {/* Create a team */}
        {/* <Button 
          className='text-lg md:w-1/4 py-10 px-12'
          // onClick={() => setFormType('create')}
        >
          Créer une nouvelle équipe
        </Button> */}

        {/* Or Separator */}
        {/* <div className="relative w-full flex items-center justify-center md:w-1/4">
          <div className="absolute inset-0 flex items-center md:px-6">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div> */}

        {/* Join a team */}
        {/* <Button 
          variant='outline' 
          className='text-lg md:w-1/4 py-10 px-12'
          // onClick={() => setFormType('join')}
        >
          Rejoindre une équipe existante
        </Button> */}
      </div>
    </motion.div>
  )
}