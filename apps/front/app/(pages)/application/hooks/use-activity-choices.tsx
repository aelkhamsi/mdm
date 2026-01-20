import { useState, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form'
import { ActivityChoiceValues, choices } from '../form/steps/activity-choice-step';

export const useActivityChoice = (form: UseFormReturn, applicationStatus: string) => {
  const [isMathSprint, setIsMathSprint] = useState<boolean>()
  const [isStand, setIsStand] = useState<boolean>()
  const [isVisitor, setVisitor] = useState<boolean>()

  const isMathSprintDisabled = choices?.find(choice => choice.value === ActivityChoiceValues.MATH_SPRINT)?.disabled
  const isStandDisabled = choices?.find(choice => choice.value === ActivityChoiceValues.STAND)?.disabled
  const isVisitorDisabled = choices?.find(choice => choice.value === ActivityChoiceValues.VISITOR)?.disabled

  const getActivityState = (activityChoices: string[], targetValue: string, isDisabled: boolean|undefined) => {
    return !isDisabled || applicationStatus === 'PENDING'
      ? activityChoices?.find((choice: string) => choice === targetValue) ? true : false
      : false
  }

  useEffect(() => {
    const formState = form.watch()
    const activityChoices = formState.activityChoices
    setIsMathSprint(
      getActivityState(activityChoices, ActivityChoiceValues.MATH_SPRINT, isMathSprintDisabled)
    )
    setIsStand(
      getActivityState(activityChoices, ActivityChoiceValues.STAND, isStandDisabled)
    )
    setVisitor(
      getActivityState(activityChoices, ActivityChoiceValues.VISITOR, isVisitorDisabled)
    )
  }, [])

  return {
    isMathSprint,
    isStand,
    isVisitor,
  }
}
