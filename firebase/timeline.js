import { firestore } from './config.js';

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  arrayRemove,
  arrayUnion,
} from './exports.js';

import { getUser } from './auth.js';

export const createDataPost = (messageContent) => {
  const date = new Date();
  return {
    message: messageContent,
    userId: getUser().uid,
    userName: getUser().displayName,
    image: '',
    answers: [],
    likes: [],
    publishDate: date.toJSON(),
    editDate: date.toJSON(),
  };
};

export const createDataAnswer = (messageContent) => {
  const date = new Date();
  return {
    message: messageContent,
    userId: getUser().uid,
    userName: getUser().displayName,
    likes: [],
    publishDate: date.toJSON(),
    editDate: date.toJSON(),
  };
};

export const newPost = async (messageContent) => {
  const dataPost = createDataPost(messageContent);
  const docRef = addDoc(collection(firestore, 'posts'), dataPost);
  return docRef;
};

export async function readAllPosts() {
  const querySnapshot = await getDocs(collection(firestore, 'posts'));
  const posts = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return posts;
}

export const readOnePost = async (idPost) => {
  const post = await getDoc(doc(firestore, 'posts', idPost));
  return {
    id: post.id,
    ...post.data(),
  };
};

export const updatePost = (idPost, messageContent) => {
  const date = new Date();
  const post = doc(firestore, 'posts', idPost);
  return updateDoc(post, {
    message: messageContent,
    editDate: date.toJSON(),
  });
};

export const deletePost = (idPost) => {
  deleteDoc(doc(firestore, 'posts', idPost));
};

export function likePost(postId, userUID) {
  const docRef = doc(firestore, 'posts', postId);
  updateDoc(docRef, {
    likes: arrayUnion(userUID),
  });
}

export function deslikePost(postId, userUID) {
  const docRef = doc(firestore, 'posts', postId);
  updateDoc(docRef, {
    likes: arrayRemove(userUID),
  });
}
