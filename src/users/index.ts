import { getUser, getUsers } from "./methods";
import { router } from "../router";

export const addUsers = () => {
  router.get("/user/:id", getUser).get("/users", getUsers);
  return router;
};
