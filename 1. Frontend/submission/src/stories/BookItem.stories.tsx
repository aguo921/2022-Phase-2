import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BookItem from '../components/BookItem';

import { Book } from '../interfaces';

export default {
  title: 'BookItem',
  component: BookItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BookItem>;

const Template: ComponentStory<typeof BookItem> = (args: Book) => <BookItem {...args} />;

export const BookOne = Template.bind({});
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