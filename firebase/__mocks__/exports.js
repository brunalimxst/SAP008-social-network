export const initializeApp = jest.fn();
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn();
export const updateProfile = jest.fn();
export const signOut = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn();
export const getFirestore = jest.fn();
export const collection = jest.fn();
export const addDoc = jest.fn();
export const getDocs = jest.fn(() => {
  return [
    {
      id: 'testeid',
      data: () => {
        return {
          message: 'messageTest',
          likes: [],
        };
      },
    },
  ];
});
export const getDoc = jest.fn(() => {
  return {
    id: 'testeid',
    data: () => {
      return {
        message: 'messageTest',
        likes: [],
      };
    },
  };
});
export const readOnePost = jest.fn();
export const doc = jest.fn();
export const updatePost = jest.fn();
export const updateDoc = jest.fn();
export const deleteDoc = jest.fn();
export const arrayUnion = jest.fn();
export const arrayRemove = jest.fn();
export const getAuth = jest.fn(() => ({
  currentUser: {
    displayName: 'gabriela',
    userUid: 'uid',
  },
}));
