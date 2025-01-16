import { useState, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form'
import { ActivityChoiceValues } from '../form/steps/activity-choice-step';

export const useActivityChoice = (form: UseFormReturn) => {
  const [isMathSprint, setIsMathSprint] = useState<boolean>()
  const [isBestMathVideo, setIsBestMathVideo] = useState<boolean>()
  const [isStand, setIsStand] = useState<boolean>()
  const [isVisitor, setVisitor] = useState<boolean>()

  useEffect(() => {
    const formState = form.watch()
    const activityChoices = formState.activityChoices
    setIsMathSprint(activityChoices?.find((choice: string) => choice === ActivityChoiceValues.MATH_SPRINT) ? true : false)
    setIsBestMathVideo(activityChoices?.find((choice: string) => choice === ActivityChoiceValues.BEST_MATH_VIDEO) ? true : false)
    setIsStand(activityChoices?.find((choice: string) => choice === ActivityChoiceValues.STAND) ? true : false)
    setVisitor(activityChoices?.find((choice: string) => choice === ActivityChoiceValues.VISITOR) ? true : false)
  }, [])

  return {
    isMathSprint,
    isBestMathVideo,
    isStand,
    isVisitor,
  }
}
