### app/pages

> Why is there a `pages` directory if all the code is inside `partials/pages`?

> Because Eleventy uses `app/partials` as the -*includes*- folder and doesn't transform the content in plain HTML.
> You can check [`.eleventy.js`](../../.eleventy.js) for the relative configuration.