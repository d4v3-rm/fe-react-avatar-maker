import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { users, posts } from './mockData';

let mock: MockAdapter;

/**
 * Initialize mock API by intercepting axios requests
 */
export const initializeMockApi = () => {
  // Create new instance of MockAdapter
  mock = new MockAdapter(axios, { delayResponse: 750 });
  
  setupAuthMocks();
  setupUserMocks();
  setupPostMocks();
  
  console.info('🔶 Mock API initialized');
  
  return mock;
};

/**
 * Setup authentication related mocks
 */
const setupAuthMocks = () => {
  // Login endpoint
  mock.onPost('/api-mock/auth/login').reply((config) => {
    try {
      const { username, password } = JSON.parse(config.data);
      
      // For demo purposes, any username/password combination works
      const user = users.find(u => u.username === username) || users[0];
      
      return [
        200, 
        { ...user, token: 'mock-jwt-token' }
      ];
    } catch (error) {
      return [400, { message: 'Invalid request' }];
    }
  });
  
  // Register endpoint
  mock.onPost('/api-mock/auth/register').reply((config) => {
    try {
      const userData = JSON.parse(config.data);
      const newUser = {
        id: String(users.length + 1),
        username: userData.username,
        email: userData.email,
        avatarUrl: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${users.length + 1}.jpg`,
      };
      
      return [201, { ...newUser, token: 'mock-jwt-token' }];
    } catch (error) {
      return [400, { message: 'Invalid request' }];
    }
  });
  
  // Logout endpoint
  mock.onPost('/api-mock/auth/logout').reply(200);
};

/**
 * Setup user related mocks
 */
const setupUserMocks = () => {
  // Get current user
  mock.onGet('/api-mock/users/me').reply((config) => {
    // Check if Authorization header exists
    const hasAuth = config.headers && config.headers.Authorization;
    
    if (hasAuth) {
      return [200, users[0]];
    } else {
      return [401, { message: 'Unauthorized' }];
    }
  });
  
  // Update user profile
  mock.onPut('/api-mock/users/me').reply((config) => {
    try {
      const updateData = JSON.parse(config.data);
      const updatedUser = { ...users[0], ...updateData };
      
      return [200, updatedUser];
    } catch (error) {
      return [400, { message: 'Invalid request' }];
    }
  });
  
  // Get all users
  mock.onGet('/api-mock/users').reply(200, users);
  
  // Get user by ID
  mock.onGet(/\/api-mock\/users\/\d+/).reply((config) => {
    const id = config.url?.split('/').pop();
    const user = users.find(u => u.id === id);
    
    if (user) {
      return [200, user];
    } else {
      return [404, { message: 'User not found' }];
    }
  });
};

/**
 * Setup post related mocks
 */
const setupPostMocks = () => {
  // Get all posts
  mock.onGet('/api-mock/posts').reply(200, posts);
  
  // Get post by ID
  mock.onGet(/\/api-mock\/posts\/\d+/).reply((config) => {
    const id = config.url?.split('/').pop();
    const post = posts.find(p => p.id === id);
    
    if (post) {
      return [200, post];
    } else {
      return [404, { message: 'Post not found' }];
    }
  });
  
  // Create new post
  mock.onPost('/api-mock/posts').reply((config) => {
    try {
      const postData = JSON.parse(config.data);
      const newPost = {
        id: String(posts.length + 1),
        title: postData.title,
        content: postData.content,
        imageUrl: postData.imageUrl || 'https://via.placeholder.com/800x400',
        createdAt: new Date().toISOString(),
        author: users[0],
      };
      
      return [201, newPost];
    } catch (error) {
      return [400, { message: 'Invalid request' }];
    }
  });
};
