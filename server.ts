// @ts-ignore
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// @ts-ignore
import { clearAll, getColors, addColor } from "./utils.ts";

const app = new Application();
const router = new Router();

router.get('/colores', (context) => {
  let respuesta = (getColors().length > 0)?getColors():"No hay colores";
  context.response.body = respuesta;
});

router.get('/color/:colorName', (context) => {
  let color = addColor(context.params.colorName)
  context.response.body = `Se agregó el color: ${color}`;
});

app.use(router.routes());

await app.listen({ hostname: "127.0.0.1", port: 8000 });
clearAll();