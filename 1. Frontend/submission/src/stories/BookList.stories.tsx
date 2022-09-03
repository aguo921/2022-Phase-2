import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BookList from '../components/BookList';
import { BookOne, BookTwo, BookThree } from './BookItem.stories';

export default {
  title: 'BookList',
  component: BookList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BookList>;;

const Template: ComponentStory<typeof BookList> = (args: any) => <BookList {...args} />;

export const Empty = Template.bind({});
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