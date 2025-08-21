import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandUrl: 'https://flightlesslabs.github.io/grid',
    brandTarget: '_self',
  },
});
