import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BookList from '../components/BookList';
import { BookOne, BookTwo, BookThree } from './BookItem.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BookList',
  component: BookList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BookList>;;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BookList> = (args: any) => <BookList {...args} />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
    books: []
}

export const OneItem = Template.bind({});
OneItem.args = {
    books: [
        {...BookOne.args}
    ]
}

export const ManyItems = Template.bind({});
ManyItems.args = {
    books: [
        {...BookOne.args},
        {...BookTwo.args},
        {...BookThree.args}
    ]
}