/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';
import Posts from './components/Posts/Posts.jsx';
import Post from './components/Post/Post.jsx';
import PostDetail from './components/PostDetails/PostDetail.jsx';
import Comments from './components/Comments/Comments.jsx';
import CommentDetail from './components/CommentDetail/CommentDetail.jsx';
import Albums from './components/Albums/Albums.jsx';
import AlbumDetail from './components/AlbumDetail/AlbumDetail.jsx';
import Photos from './components/Photos/Photos.jsx';
import PhotoDetail from './components/PhotoDetail/PhotoDetail.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'comments',
        element: <Comments></Comments>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments')
      },
      {
        path: 'comment/:commentId',
        element: <CommentDetail></CommentDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
      },
      {
        path: 'albums',
        element: <Albums></Albums>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/albums')
      },
      {
        path: 'album/:albumId',
        element: <AlbumDetail></AlbumDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)
      },
      {
        path: 'photos',
        element: <Photos></Photos>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos')
      },
      {
        path:'photo/:photoId',
        element:<PhotoDetail></PhotoDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`)
      },
      {
        path: 'first',
        element: <First></First>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
