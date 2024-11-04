import { createRouter } from 'uni-mini-router';
import pagesJsonToRoutes from 'uni-parse-pages';
import pagesJson from '../pages.json';

const routes = pagesJsonToRoutes(pagesJson);

/** @type {import('uni-mini-router).RouterOptions} */
const router = createRouter({
	routes: [...routes],
});

export default router;