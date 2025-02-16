import React from 'react'

enum ActivityChoiceValues {
  MATH_SPRINT = 'math_sprint',
  BEST_MATH_VIDEO = 'best_math_video',
  STAND = 'stand',
  VISITOR = 'visitor'
}

const ActivityChoiceCard = ({
  activity,
  className
}:{
  activity: string
  className?: string
}) => {
  return (
    <div className={className}>
      {activity.replaceAll('_', ' ')}
    </div>
  )
}

export const getActivityChoiceClassname = (activity: string) => {
  const baseClassname = 'w-fit rounded-lg my-1 px-2';
  let colorClassname;

  switch(activity) {
    case ActivityChoiceValues.MATH_SPRINT:
      colorClassname = 'bg-red-300';
      break;
    case ActivityChoiceValues.BEST_MATH_VIDEO:
      colorClassname = 'bg-orange-300';
      break;
    case ActivityChoiceValues.STAND:
      colorClassname = 'bg-cyan-300';
      break;
    case ActivityChoiceValues.VISITOR:
      colorClassname = 'bg-green-300';
      break;
  }

  return `${baseClassname} ${colorClassname}`;
}

const ApplicationActivityChoices = ({
  activityChoices
}:{
  activityChoices: string[]
}) => {

  return (
    <div className='flex flex-col items-center'>
      {
        activityChoices.map(activity => {
          const className = getActivityChoiceClassname(activity)
          return <ActivityChoiceCard key={activity} activity={activity} className={className} />
        })
      }
    </div>
  )
}

export default ApplicationActivityChoices
