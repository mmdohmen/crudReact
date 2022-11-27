//import './App.css';
// componentes
import {CreateBlog} from './components/CreateBlog'
import {EditBlog} from './components/EditBlog'
import ShowBlogs from './components/ShowBlogs'
// rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowBlogs/>} />
        <Route path='/create' element={<CreateBlog/>} />
        <Route path='/edit/:id' element={<EditBlog/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
