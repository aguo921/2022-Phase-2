import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Ratings from '../components/Ratings';

type Props = {
    ratingsCount: number | undefined,
    averageRating: number | undefined
}

export default {
  title: 'Ratings',
  component: Ratings,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Ratings>;;

const Template: ComponentStory<typeof Ratings> = (args: Props) => <Ratings {...args} />;

export const RatingOne = Template.bind({});
RatingOne.args = {
    ratingsCount: 10,
    averageRating: 5
}

export const RatingTwo = Template.bind({});
RatingTwo.args = {
    ratingsCount: 12,
    averageRating: 2.5
}

export const RatingThree = Template.bind({});