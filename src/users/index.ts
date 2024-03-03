import { getUser, getUsers } from "./methods";
import { router } from "../router";

export const addUsers = () => {
  router.get("/users", getUsers).get("/user/:id", getUser);
  return router;
};
