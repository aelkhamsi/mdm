import { motion } from 'framer-motion'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import { Input, Separator } from "@mdm/ui"
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "@mdm/ui"

const educationLevelsPrimary = [
  {label: "CE6", value:"ce6"},
  {label: "CE5", value:"ce5"},
  {label: "CE4", value:"ce4"},
  {label: "CE3", value:"ce3"},
  {label: "CE2", value:"ce2"},
  {label: "CE1", value:"ce1"},
]
const educationLevelsSecondary = [
  {label: "3AC", value:"3ac"},
  {label: "2AC", value:"2ac"},
  {label: "1AC", value:"1ac"},
]
const educationLevelsHighschool = [
  {label: "2ème année Bac", value:"2bac"},
  {label: "1ère année Bac", value:"1bac"},
  {label: "Tronc commun", value:"tronc-commun"},
]
const educationLevelsHigherEducation = [
  {label: "Université", value:"university"},
  {label: "Classes Préparatoires", value:"cpge"},
  {label: "Autre", value:"other"},
]

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const EstablishmentInformationStep = ({
  form,
  delta,
}:{
  form: UseFormReturn,
  delta: number
}) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Informations sur l'école ou l'organisation
      </h2>
      <Separator className='my-6 bg-[#0284C7]'/>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
        {/* Establishment */}
        <FormField
          control={form.control}
          name="establishmentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de l&apos;Établissement<RequiredAsterisk /></FormLabel>
              <FormControl>
                <Input placeholder="Nom de l'établissement" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Highschool */}
        <FormField
          control={form.control}
          name="establishmentCity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ville de l&apos;Établissement<RequiredAsterisk /></FormLabel>
              <FormControl>
                <Input placeholder="Ville de l'établissement" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Education Level */}
        <FormField
          control={form.control}
          name="establishmentLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Niveau d&apos;étude des participants <RequiredAsterisk /></FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    <SelectGroup>
                      <SelectLabel>Supérieur <Separator className='mt-2 bg-gray-300' /></SelectLabel>
                      {educationLevelsHigherEducation.map(level =>
                        <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                      )}
                      <SelectLabel>Lycée <Separator className='mt-2 bg-gray-300' /></SelectLabel>
                      {educationLevelsHighschool.map(level =>
                        <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                      )}
                      <SelectLabel>Collège <Separator className='mt-2 bg-gray-300' /></SelectLabel>
                      {educationLevelsSecondary.map(level =>
                        <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                      )}
                      <SelectLabel>Primaire <Separator className='mt-2 bg-gray-300' /></SelectLabel>
                      {educationLevelsPrimary.map(level =>
                        <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select> 
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Highschool */}
        <FormField
          control={form.control}
          name="numberOfParticipants"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de participants dans le groupe <RequiredAsterisk /></FormLabel>
              <FormControl>
                <Input placeholder="Nombre d'élèves" type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  )
}