import { ActivityChoiceValues } from "@/app/home/applications/components/application-activity-choices";
import ApiMethods from "./ApiMethods";

export const sendMathSprintReminder = () => {
  const url = "mailer/reminder";
  return ApiMethods.post(url, {
    activityName: ActivityChoiceValues.MATH_SPRINT,
  });
};

export const sendStandReminder = () => {
  const url = "mailer/reminder";
  return ApiMethods.post(url, { activityName: ActivityChoiceValues.STAND });
};
