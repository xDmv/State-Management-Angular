# A test task to test knowledge of Angular and NgRx

Angular version: 14.2.0.
NgRx version:

use Node version: v14.15.4
use npm version: 6.14.10 or yarn

## Task:
1) create default Angular project version 14
2) install packages NgRx
3) create json with test data
4) create store, effects, action and reducer
5) create main page with link to page with result
6) create a page to display the engine items fetched from the endpoint. Use the `enginesSelector` to get the data from the redux store. Engine details (oem, name and list of engine models) should be displayed in the table format (by using e.g. flex-box or ideally css-grid) with following rules (see `screenshots/engines-grid.png`):
   - For screen size under `480px` - 1 column grid
   - For screen size larger then `480px` and smaller then `1024px` - 2 column grid
   - For screen size larger then `1024px` - 4 column grid

