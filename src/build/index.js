/**
 * Order matters!
 * Put the `CSS` rule higher than the `SCSS` rule.
 * Then in a bundle `CSS` file the `CSS` files will be higher than the
 * `SCSS` compiled files and the `SCSS` rules will be overrride the `CSS` rules.
 * This is to allow custom style override the CSS-libraries.
 *
 * @example
 * import 'bootstrap/dist/css/bootstrap.min.css';
 * import '@scss/index.scss';
 */

/**
 * A `PUG` files doesn't required to be included in the entry points.
 * It's already included in the `webpack.config.js`.
 */

// doesn't required, just a reminder.
//import '@pug/index.pug';

import '@scss/index.scss';
import '@ts/index.ts';
