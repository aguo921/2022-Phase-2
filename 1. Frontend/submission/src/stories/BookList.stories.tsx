import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BookList from '../components/BookList';

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
        {
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
    ]
}

export const ManyItems = Template.bind({});
ManyItems.args = {
    books: [
        {
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
        },
        {
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
        },
        {
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
    ]
}