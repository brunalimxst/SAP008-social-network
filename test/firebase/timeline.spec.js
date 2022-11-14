/**
 * @jest-environment jsdom
 */
import {
  readAllPosts,
  createDataPost,
  createDataAnswer,
  newPost,
  readOnePost,
  updatePost,
  deletePost,
  likePost,
  deslikePost,
} from '../../src/firebase/timeline.js';

import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from '../../src/firebase/exports.js';

jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');

jest.useFakeTimers('modern').setSystemTime(new Date(2022, 10, 23));
afterEach(() => {
  jest.clearAllMocks();
});

describe('createDataPost', () => {
  it('should be a function', () => {
    expect(typeof createDataPost).toBe('function');
  });
  it('should have receive an object with the right values', () => {
    const dataPost = createDataPost('testMessageContent');
    expect(dataPost.message).toBe('testMessageContent');
    expect(dataPost.image).toBe('');
    expect(dataPost.answers).toStrictEqual([]);
    expect(dataPost.likes).toStrictEqual([]);
  });
});

describe('createDataAnswer', () => {
  it('should be a function', () => {
    expect(typeof createDataPost).toBe('function');
  });
  it('should have receive an object with the right values', () => {
    const dataAnswer = createDataAnswer('testMessageContent');
    expect(dataAnswer.message).toBe('testMessageContent');
    expect(dataAnswer.likes).toStrictEqual([]);
  });
});

describe('newPost', () => {
  it('should be a function', () => {
    expect(typeof newPost).toBe('function');
  });
  it('should call another function one time', () => {
    const dataPost = newPost('testMessageContent', 'testUser');
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledTimes(1);
  });
});

describe('readAllPosts', () => {
  it('should be a function', () => {
    expect(typeof readAllPosts).toBe('function');
  });
  it('should call another function one time', () => {
    const dataAllPosts = readAllPosts();
    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledTimes(1);
  });
});

describe('readOnePost', () => {
  it('should be a function', () => {
    expect(typeof readOnePost).toBe('function');
  });
  it('should call another function with the right params', () => {
    readOnePost('testIdPost');
    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', 'testIdPost');
    expect(getDoc).toHaveBeenCalledTimes(1);
  });
});

describe('updatePost', () => {
  it('should be a function', () => {
    expect(typeof updatePost).toBe('function');
  });
  it('should call another function with the right params', () => {
    const date = new Date();
    updatePost('testIdPost', 'testmessageContent');
    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', 'testIdPost');
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      message: 'testmessageContent',
      editDate: date.toJSON(),
    });
  });
});

describe('deletePost', () => {
  it('should be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('should call another function with the right params', () => {
    deletePost('testIdPost');
    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', 'testIdPost');
  });
});

describe('likePost', () => {
  it('should be a function', () => {
    expect(typeof likePost).toBe('function');
  });
  it('should call another functions with the right params', () => {
    likePost('testIdPost', 'testUserName');
    expect(arrayUnion).toHaveBeenCalledTimes(1);
    expect(arrayUnion).toHaveBeenCalledWith('testUserName');
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, { likes: undefined });
  });
});

describe('deslikePost', () => {
  it('should be a function', () => {
    expect(typeof deslikePost).toBe('function');
  });
  it('should call another function with the right params', () => {
    deslikePost('testIdPost', 'testUserName');
    expect(arrayRemove).toHaveBeenCalledTimes(1);
    expect(arrayRemove).toHaveBeenCalledWith('testUserName');
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, { likes: undefined });
  });
});
