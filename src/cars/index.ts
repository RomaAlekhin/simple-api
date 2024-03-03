import { getCars } from "./methods";
import { router } from "../router";

export const addCars = () => {
  router.get("/cars", getCars);
  return router;
};
