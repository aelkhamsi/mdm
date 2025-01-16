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

export enum ActivityChoiceValues {
  MATH_SPRINT = 'math_sprint',
  BEST_MATH_VIDEO = 'best_math_video',
  STAND = 'stand',
  VISITOR = 'visitor'
}

const choices = [
  {
    value: ActivityChoiceValues.MATH_SPRINT,
    label: "🏁 Math Sprint",
    type: "Compétition",
    color: 'orange-700',
    target: 'Élèves collège/lycée'
  },
  {
    value: ActivityChoiceValues.BEST_MATH_VIDEO,
    label: "📽️ Best mathematical video",
    type: "Compétition",
    color: 'orange-700',
    target: 'Ouvert pour tous'
  },
  {
    value: ActivityChoiceValues.STAND,
    label: "🎤 Présenter en Stand",
    type: "Organisation",
    color: 'blue-700',
    target: 'Étudiants universitaires'
  },
  {
    value: ActivityChoiceValues.VISITOR,
    label: "🏖️ Visiteur (conférences et stands)",
    type: "Visite",
    color: 'green-700',
    target: 'Ouvert pour tous'
  },
] as const

export const ActivityChoiceStep = ({
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
        Choix des activités
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Choisissez les activités/compétitions auxquelles vous voulez participer
        <Separator className='mt-4 mb-8 bg-[#0284C7]'/>
      </p>

      <FormField
        control={form.control}
        name="activityChoices"
        render={() => (
          <>
            <FormItem className='flex flex-wrap justify-center space-y-0 gap-x-4 '>
              {choices.map((choice) => (
                <FormField
                  key={choice.value}
                  control={form.control}
                  name="activityChoices"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={choice.value}
                        className="text-center"
                      >
                        <FormLabel className="font-normal text-sm cursor-pointer">
                          <div className={`text-left text-[11px] font-semibold text-${choice.color}`}>
                            {choice.type}
                          </div>
                          <div className={`flex items-center justify-center p-4 bg-gray-50 border-[1px] w-[8rem] h-[7rem]`}>
                            {choice.label}
                          </div>
                          <div className='text-left text-xs text-gray-600'>
                            {choice.target}
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
            </FormItem>
            
            <FormMessage className='text-center mt-2 text-xs'/>
          </>
        )}
      />
    </motion.div>
  )
}