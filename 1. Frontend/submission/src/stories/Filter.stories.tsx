import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Filter from '../components/Filter';

import { FilterProps } from '../interfaces';

export default {
  title: 'Filter',
  component: Filter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args: FilterProps) => <Filter {...args} />;

export const Any = Template.bind({});
Any.args = {
    searchBy: "any"
}

export const Author = Template.bind({});
Author.args = {
    searchBy: "inauthor"
}

export const Title = Template.bind({});
Title.args = {
    searchBy: "intitle"
}