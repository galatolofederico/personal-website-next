import { MantineDecorator } from './storybook/MantineDecorator';

addDecorator(withKnobs);
addDecorator(MantineDecorator);

configure(() => {
  loadStories();
}, module);