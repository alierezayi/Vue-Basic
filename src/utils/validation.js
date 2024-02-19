export const validation = (data) => {
  if (!data.title || typeof !data.title === "string") {
    return "Title can not be empty";
  }

  if (!data.body || typeof !data.body === "string") {
    return "Text can not be empty";
  }

  return null;
};
