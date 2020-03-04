import {renderEntireTree} from "./render";

const state = {
  dialogData: [
    {id: 1, name: 'John'},
    {id: 2, name: 'Not John'},
    {id: 3, name: 'Uzaurus'},
    {id: 4, name: 'Lada Kalina'},
    {id: 5, name: 'Michael Jordan'}
  ],
  messagesData: [
    {id: 1, message: 'I am John', date: 'Now'},
    {id: 2, message: 'Три гуся атаковали посольство шмелей', date: 'Now'},
    {id: 3, message: 'Это да', date: '24/12/20'},
    {id: 4, message: 'Страшно подумать, что ...', date: 'One minute ago'},
    {id: 5, message: 'This those these', date: 'Year ago'}
  ],

  postsData: [
    {
      id: 1,
      name: 'Billy Bob',
      content: 'You are hired!',
      date: 'Just now',
      likesCount: 12,
      avatarUrl: 'https://svgsilh.com/svg/1633249.svg'
    },
    {
      id: 2,
      name: 'John Wayne',
      content: 'Make juniors great again!',
      date: 'Two hours ago',
      likesCount: 187,
      avatarUrl: 'https://svgsilh.com/svg/1633249.svg'
    },
    {
      id: 3,
      name: 'Big Lebovsky',
      content: 'Go home!',
      date: 'Yesterday, at 9 p.m.',
      likesCount: 25,
      avatarUrl: 'https://svgsilh.com/svg/1633249.svg'
    }
  ]
};

export const addPost = (text) => {
  let newPost = {
    id: state.postsData[state.postsData.length - 1].id + 1,
    name: 'Lol',
    content: text,
    date: 'Now',
    likesCount: 0,
    avatarUrl: 'https://svgsilh.com/svg/1633249.svg'
  };
  state.postsData.push(newPost);
  renderEntireTree(state);
};

export const addMessage = (text) => {
  let newMessage = {
    id: state.messagesData[state.messagesData.length - 1].id + 1,
    message: text,
    date: 'Now'
  };

  state.messagesData.push(newMessage);
  renderEntireTree(state);
};

export default state;
