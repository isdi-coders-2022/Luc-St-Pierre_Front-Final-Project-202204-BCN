const getClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export default getClassNames;
