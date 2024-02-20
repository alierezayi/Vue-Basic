export const validation = (data) => {
  if (!data.value.title || typeof !data.value.title === "string") {
    return "Title can not be empty";
  }

  if (!data.value.body || typeof !data.value.body === "string") {
    return "Text can not be empty";
  }

  return null;
};
