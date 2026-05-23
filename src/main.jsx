import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import PostListPage from './pages/PostListPage.jsx';
import ComposePage from './pages/ComposePage.jsx';
import SinglePostPage from './pages/SinglePostPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: '/compose',
    element: <ComposePage />
  },
  {
    path: "/posts",
    element: <PostListPage />
  },
  {
    path: "/:slug",
    element: <SinglePostPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={}
  </StrictMode>,
)
