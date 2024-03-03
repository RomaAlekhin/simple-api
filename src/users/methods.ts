import { Context } from "koa";
import { delay } from "../utils";
import users from "./db.json";

export const getUsers = async (ctx: Context) => {
  await delay();

  ctx.body = users;
};

export const getUser = async (ctx: Context) => {
  await delay();

  const id = ctx.params.id;
  const user = users.find((user) => user.id === Number(id));
  if (!user) ctx.throw(404, `user ${id} not found`);
  ctx.body = user;
};
