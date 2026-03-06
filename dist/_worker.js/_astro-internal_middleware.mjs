globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_B8rI0ZSe.mjs';
import './chunks/astro/server_B56e0_WZ.mjs';
import { s as sequence } from './chunks/index_a07PXHh3.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
