import Koa from "koa";
import cors from "@koa/cors";
import { addUsers } from "./users";
import { addCars } from "./cars";
import { router } from "./router";

const app = new Koa();

addCars();
addUsers();

app.use(cors());
app.use(router.routes());

app.listen(3000);
