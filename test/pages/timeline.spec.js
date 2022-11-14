/**
 * @jest-environment jsdom
 */
 import timeline, { mountPost } from '../../src/pages/timeline/timeline.js';
 import { redirect } from '../../src/redirect.js';
 import { readOnePost, deletePost, updatePost, likePost, deslikePost } from '../../src/firebase/timeline.js';
 
 jest.mock('../../src/firebase/exports.js');
 jest.mock('../../src/firebase/auth.js');
 jest.mock('../../src/firebase/timeline.js');
 jest.mock('../../src/redirect.js');
 
 const awaitInAllPromisses = () => new Promise(process.nextTick);
 
 afterEach(() => {
   jest.clearAllMocks();
 });
 
 describe('timeline', () => {
   timeline();
   it('should be a function', () => {
     expect(typeof timeline).toBe('function');
   });
 
   it('should return a div with a valid innerHTML', () => {
     const container = timeline();
     expect(container).toHaveProperty('innerHTML');
     expect(container.innerHTML.length).toBeGreaterThan(0);
     expect(typeof container.innerHTML).toBe('string');
   });
 
   it('test change of routes', async () => {
     const container = timeline();
     const button = container.querySelector('#logout-btn');
     const event = new Event('click');
     button.dispatchEvent(event);
     await awaitInAllPromisses();
     expect(redirect).toHaveBeenCalledWith('#login');
   });
 
   it('test the publishing event', async () => {
     const container = timeline();
     const button = container.querySelector('#publish-btn');
     const event = new Event('click');
     const textArea = container.querySelector('#post-publish');
     textArea.value = 'test';
     button.dispatchEvent(event);
     await awaitInAllPromisses();
     expect(textArea.value).toBe('');
   });
 
   it('should call another function and print a valid div', () => {
     readOnePost().then((postRef) => {
       const container = mountPost(postRef);
       expect(typeof container).toBe('object');
     });
   });
 
   it('test the delete modal', async () => {
     readOnePost().then(async (postRef) => {
       const container = mountPost(postRef);
       const button = container.querySelector('#btn-delete');
       const modalDelete = container.querySelector('#modal-delete');
       const event = new Event('click');
       button.dispatchEvent(event);
       await awaitInAllPromisses();
       expect(typeof modalDelete).toBe('object');
     });
   });
 
   it('test if the post is being deleted', async () => {
     readOnePost().then(async (postRef) => {
       const container = mountPost(postRef);
       const button = container.querySelector('#btn-modal-delete');
       const modalDelete = container.querySelector('#modal-delete');
       const event = new Event('click');
       button.dispatchEvent(event);
       expect(deletePost).toHaveBeenCalledTimes(1);
       expect(modalDelete.style.display).toBe('none');
     });
   });
 
   it('test edit post click event button', async () => {
     readOnePost().then(async (postRef) => {
       const container = mountPost(postRef);
       const button = container.querySelector('#btn-edit');
       const textArea = container.querySelector('#post-published');
       textArea.value = 'edit'
       expect(textArea).toHaveProperty('disabled');
       const event = new Event('click');
       button.dispatchEvent(event);
       expect(textArea).not.toContain('disabled');
       button.dispatchEvent(event);
       expect(textArea).toHaveProperty('disabled', true);
       expect(updatePost).toHaveBeenCalledTimes(1);
     });
   });
 
   it('test like/deslike post click event button', async () => {
     readOnePost().then(async (postRef) => {
       const container = mountPost(postRef);
       const button = container.querySelector('#btn-like');
       const event = new Event('click');
       button.dispatchEvent(event);
       expect(likePost).toHaveBeenCalledTimes(1);
       expect(likePost).toHaveBeenCalledWith(postRef.id, postRef.userId);
       expect(postRef.likes).toContain(postRef.userId);
       let count_likes = button.querySelector('.number-likes')
       expect(count_likes.innerText).toBe(1);
       button.dispatchEvent(event);
       expect(deslikePost).toHaveBeenCalledTimes(1);
       expect(likePost).toHaveBeenCalledWith(postRef.id, postRef.userId);
       expect(postRef.likes).not.toContain(postRef.userId);
       count_likes = button.querySelector('.number-likes')
       expect(count_likes.innerText).toBe(0);
       });
   });
 });