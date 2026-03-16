import ApiMethods from "./ApiMethods";

export const postGroupApplication = (application: any) => {
  const url = "group-applications";
  const body = { ...application };
  return ApiMethods.post(url, body);
};

export const getAllGroupApplications = () => {
  const url = "group-applications";
  return ApiMethods.get(url);
};

export const getGroupApplicationById = (id: number) => {
  const url = "group-applications";
  return ApiMethods.get(url);
};

export const putGroupApplication = (id: number, partialApplication: any) => {
  const url = `group-applications/${id}`;
  const body = { ...partialApplication };
  return ApiMethods.put(url, body);
};

export const putGroupApplicationStatus = (
  id: number,
  partialApplicationStatus: any,
) => {
  const url = `group-applications/status/${id}`;
  const body = { ...partialApplicationStatus };
  return ApiMethods.put(url, body);
};

export const deleteGroupApplication = (id: number) => {
  const url = `group-applications/${id}`;
  return ApiMethods.delete(url);
};
