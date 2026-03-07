globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_GTSbUfCq.mjs';
import './chunks/astro/server_BDITcAQH.mjs';
import { s as sequence } from './chunks/index_CcPTvi9T.mjs';

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
