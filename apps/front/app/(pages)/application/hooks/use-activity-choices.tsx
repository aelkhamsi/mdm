import { useState, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form'

export const useActivityChoice = (form: UseFormReturn) => {
  const [isMathSprint, setIsMathSprint] = useState<boolean>()
  const [isBestMathVideo, setIsBestMathVideo] = useState<boolean>()
  const [isStand, setIsStand] = useState<boolean>()
  const [isVisitor, setVisitor] = useState<boolean>()

  useEffect(() => {
    const formState = form.watch()
    const activityChoices = formState.activityChoices
    setIsMathSprint(activityChoices?.find((choice: string) => choice === 'math_sprint') ? true : false)
    setIsBestMathVideo(activityChoices?.find((choice: string) => choice === 'best_mathematical_video') ? true : false)
    setIsStand(activityChoices?.find((choice: string) => choice === 'stand') ? true : false)
    setVisitor(activityChoices?.find((choice: string) => choice === 'visitor') ? true : false)
  }, [])

  return {
    isMathSprint,
    isBestMathVideo,
    isStand,
    isVisitor,
  }
}
