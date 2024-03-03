import { Context } from "koa";
import { delay } from "../utils";
import cars from "./db.json";

export const getCars = async (ctx: Context) => {
  await delay();

  ctx.body = cars;
};
