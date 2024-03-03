import { getCar, getCars } from "./methods";
import { router } from "../router";

export const addCars = () => {
  router.get("/cars", getCars).get("/user/:id", getCar);
  return router;
};
