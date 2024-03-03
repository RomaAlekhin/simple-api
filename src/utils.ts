import { WithId } from "./types";

export const delay = async (delay = 0) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};

export const getById = <T extends object>(
  data: WithId<T>[],
  id: string
): WithId<T> | undefined => {
  return data.find((item) => item.id === id);
};
