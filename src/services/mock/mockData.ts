// Mock data for development and testing

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  author: User;
}

// Mock users
export const users: User[] = [
  {
    id: '1',
    username: 'johndoe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    username: 'janedoe',
    email: 'jane.doe@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    username: 'bobsmith',
    email: 'bob.smith@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

// Mock posts
export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Styled Components',
    content: 'Styled Components is a library that utilizes tagged template literals to style components...',
    imageUrl: 'https://via.placeholder.com/800x400',
    createdAt: '2025-03-20T08:00:00.000Z',
    author: users[0],
  },
  {
    id: '2',
    title: 'The Power of React Redux',
    content: 'Redux is a predictable state container for JavaScript applications...',
    imageUrl: 'https://via.placeholder.com/800x400',
    createdAt: '2025-03-21T10:30:00.000Z',
    author: users[1],
  },
  {
    id: '3',
    title: 'Building Scalable React Applications',
    content: 'Creating scalable React applications requires a well-thought architecture...',
    imageUrl: 'https://via.placeholder.com/800x400',
    createdAt: '2025-03-22T14:15:00.000Z',
    author: users[2],
  },
  {
    id: '4',
    title: 'Advanced Theme Management in React',
    content: 'Managing themes in React applications can be challenging as apps grow...',
    imageUrl: 'https://via.placeholder.com/800x400',
    createdAt: '2025-03-23T09:45:00.000Z',
    author: users[0],
  },
  {
    id: '5',
    title: 'Modern CSS Techniques for React Developers',
    content: 'CSS has evolved significantly in recent years. Here are some modern techniques...',
    imageUrl: 'https://via.placeholder.com/800x400',
    createdAt: '2025-03-24T11:20:00.000Z',
    author: users[1],
  },
];
