import ApiMethods from "./ApiMethods";

export const sendMathSprintReminder = () => {
  const url = "mailer/math-sprint-reminder";
  return ApiMethods.post(url, {});
};
