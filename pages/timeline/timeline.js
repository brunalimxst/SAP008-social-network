import {
  newPost,
  readAllPosts,
  readOnePost,
  updatePost,
  deletePost,
  likePost,
  deslikePost,
} from '../../firebase/timeline.js';

import { getUser, logout } from '../../firebase/auth.js';
import { redirect } from '../../routes.js';
import { getAuth } from '../../firebase/exports.js';
import { app } from '../../firebase/config.js';

const auth = getAuth(app);

export default () => {
  const container = document.createElement('div');
  const printPosts = readAllPosts();

  const template = `
   <header class='container-header'> 
      <figure>
        <img class='logo-timeline' src='./imagens/logo-mobile.png' alt='logo'>
      </figure>
      <button id='logout-btn' class='logout-btn'><img class='logout-icon' src='./imagens/logout.svg' alt='signout-icon'></button>
   </header>

   <main class='container-main'>
      <section class='container-post'>
        <figure>
          <img class='img-profile' id='img-profile' src='./imagens/logo.png' alt='profile'/>
        </figure>

        <textarea class='post-publish' id='post-publish' placeholder='Compartilhe sua vivência...' cols='60' rows='10' style='resize:none'></textarea>
      </section>
        
      <div class='linha-um'></div>
      <section class='container-btn'>
        <button class='btn-add-img' id='add-image'><img class='btn-add-img-icon' src='./imagens/icon-photo.svg' alt='add-image'></button>

        <button class='publish-btn' id='publish-btn'><img class='publish-post-icon' src='./imagens/btn-post.svg' alt='add-image'></button>
      </section>
      <div class='linha-dois'></div>
      <div class='allposts' id='publishingPost'></div>
      <div class='allPosts' id='allPosts'></div>
    </main>      
  `;

  container.innerHTML = template;

  const btnLogout = container.querySelector('#logout-btn');

  btnLogout.addEventListener('click', async () => {
    await logout();
    redirect('#login');
  });

  const btnPublish = container.querySelector('#publish-btn');
  const postPublish = container.querySelector('#post-publish');
  const allPosts = container.querySelector('#allPosts');

  btnPublish.addEventListener('click', async () => {
    const publishingPost = container.querySelector('#publishingPost');
    const messageContent = postPublish.value;
    if (messageContent.length > 0) {
      let postRef = await newPost(messageContent);
      postRef = await readOnePost(postRef.id);
      publishingPost.appendChild(mountPost(postRef));
    } else {
      alert('Ops, parece que seu post está vazio');
    }

    postPublish.value = '';
  });

  printPosts.then((post) => {
    post.forEach((post) => {
      allPosts.appendChild(mountPost(post));
    });
  });
  return container;
};

const mountPost = (post) => {
  let editDeleteButtons = '';
  if (auth.currentUser.uid === post.userId) {
    editDeleteButtons = `
      <div class='container-btns-right'>
        <button class='btn-edit' id='btn-edit' data-post-id='${post.userId}'><img class='btn-edit-icon' src='./imagens/icon-edit.svg' alt='edit'></button>
        <button class='btn-delete' id='btn-delete' data-post-id='${post.userId}'><img class='btn-delete-icon' src='./imagens/delete-icon.svg' alt='delete'></button>
      </div>
    `;
  }
  const container = document.createElement('div');

  const templatePost = `
  <section class='container-posts-feed' id='posts-${post.userId}'>
    <header class='container-header-feed'>
      <figure class='img-profile-feed'>
        <img class='img-profile-post' id='img-profile-post' src='./imagens/logo.png'/>
      </figure>
      <p class='user-name' id='user-name'>${post.userName}</p>
      <textarea class='post-published' id='post-published' style='resize:none' disabled>${post.message}</textarea>
    </header>
    <footer class='container-footer-feed'>
      <div class='container-btns-left'>
        <button class='btn-like like-count' id='btn-like' value=><img class='btn-like-icon' src='./imagens/icon-like.svg' alt='like'><p class='number-likes'>${post.likes.length}</p></button>
        <button class='btn-comment' id='btn-comment'><img class='btn-comment-icon' src='./imagens/icon-coment.svg' alt='comment'></button>
      </div>
      ${editDeleteButtons}
    </footer>

    <div class='modal-delete' id='modal-delete'>
      <div class='modal-delete-content'>
        <p class='modal-delete-text'>Tem certeza que deseja excluir?</p>
        <div class='modal-delete-btns'>
          <button class='btn-modal-delete' id='btn-modal-delete'>Excluir</button>
          <button class='btn-modal-cancel' id='btn-modal-cancel'>Cancelar</button>
        </div>
      </div>
    </div>

  </section>
  `;
  container.innerHTML = templatePost;

  const btnDelete = container.querySelector('#btn-delete');
  //para disparar o modal
  const modalDelete = container.querySelector('#modal-delete');
  if(btnDelete) {
    btnDelete.addEventListener('click', () => {
      modalDelete.style.display = 'flex';
    });
  }
  //para fechar o modal
  const btnModalCancel = container.querySelector('#btn-modal-cancel');
  if(btnModalCancel) {
    btnModalCancel.addEventListener('click', () => {
      modalDelete.style.display = 'none';
    });
  }
  //para deletar o post
  const btnModalDelete = container.querySelector('#btn-modal-delete');
  if(btnModalDelete) {
    btnModalDelete.addEventListener('click', () => {
      deletePost(post.id);
      modalDelete.style.display = 'none';
      container.remove();
    });
  }

  const btnEdit = container.querySelector('#btn-edit');
  if (btnEdit) {
    btnEdit.addEventListener('click', (e) => {
      const textarea = container.querySelector('#post-published');
      textarea.removeAttribute('disabled');
      btnEdit.removeEventListener('click', e);
      btnEdit.addEventListener('click', () => {
        textarea.setAttribute('disabled', 'true');
        updatePost(post.id, textarea.value);
      });
    });
  }

  const btnLike = container.querySelector('#btn-like');
  btnLike.addEventListener('click', () => {
    const user = getUser();
    if (post.likes.includes(user.uid)) {
      deslikePost(post.id, user.uid);
      post.likes.splice(post.likes.indexOf(user.uid));
      btnLike.innerHTML = `<img class='btn-like-icon' src='./imagens/icon-like.svg' alt='like'><p class='number-likes'>${post.likes.length}</p>`;
    } else {
      likePost(post.id, user.uid);
      post.likes.push(user.uid);
      btnLike.innerHTML = `<img class='btn-like-icon' src='./imagens/icon-liked.svg' alt='liked'><p class='number-likes'>${post.likes.length}</p>`;
    }
    btnLike.querySelector('p').innerText = post.likes.length;
  });
  

  return container;
};