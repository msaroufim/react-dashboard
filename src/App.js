// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

//need to creatte my own custom converter for more my own data sources
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

//App renders an Admin component
//Resource name users tells Admin to fetch users from the url
//Resource has all the crud commands 
//ListGuesser is the component that can display a list of posts
//Each resource creates its own page/tab which is perfect for me
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name = "posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name = "users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;