import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BookItem from '../components/BookItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BookItem',
  component: BookItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BookItem>;;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BookItem> = (args: any) => <BookItem {...args} />;

export const BookOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BookOne.args = {
    volumeInfo: {
        title: "Flowers",
        authors: [
            "Vijaya Khisty Bodach"
        ],
        ratingsCount: 5,
        averageRating: 4.5,
        description: "Blah blah blah",
        imageLinks: {
            thumbnail: "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
    }
}

export const BookTwo = Template.bind({});
BookTwo.args = {
    volumeInfo: {
        title: "Idiots",
        authors: [
            "Idiotta"
        ],
        ratingsCount: 3,
        averageRating: 2,
        description: "Blah blah blah",
        imageLinks: {
            thumbnail: "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
    }
}

export const BookThree = Template.bind({});
BookThree.args = {
    volumeInfo: {
        title: "Trees",
        authors: [
            "Greendale"
        ],
        ratingsCount: 10,
        averageRating: 5,
        description: "Blah blah blah",
        imageLinks: {
            thumbnail: "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
    }
}