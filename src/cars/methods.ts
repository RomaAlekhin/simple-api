import { Context } from "koa";
import { delay, getById } from "../utils";
import cars from "./db.json";

export const getCars = async (ctx: Context) => {
  await delay();

  ctx.body = cars;
};

export const getCar = async (ctx: Context) => {
  await delay();

  const id = ctx.params.id;
  const user = getById(cars, id);

  if (!user) ctx.throw(404, `car ${id} not found`);

  ctx.body = user;
};
