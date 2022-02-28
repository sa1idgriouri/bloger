/* eslint-disable prettier/prettier */
import React from 'react'
import AllCagegory from './components/categorys/AllCagegory.js'
import EditCategory from './components/categorys/EditCategory.js'


const AllPost = React.lazy(() => import('./components/posts/AllPost.js'))
const AddPost = React.lazy(() => import('./components/posts/AddPost'))

const AddCategory = React.lazy(() => import('./components/categorys/AddCategory'))


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))








const routes = [
  { path: '/dashboard', exact: true, name: 'Home', component: Dashboard, },
  { path: '/dashboard/post', name: 'Posts', component: AllPost },

  { path: '/dashboard/post/add', name: 'Add New Post', component: AddPost, exact: true },

  { path: "/dashboard/categorie", name: "Categorie", component: AllCagegory, exact: true },

  { path: "/dashboard/categorie/add", name: "Add New Categorie", component: AddCategory, exact: true },

  { path: "/categorie/edit/:id", name: "edit", component: EditCategory, exact: true }

]

export default routes
