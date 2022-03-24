import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SingleBlogDetails from './components/SingleBlogDetails/SingleBlogDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNewPost from './components/AddNewPost/AddNewPost';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="addnewpost" element={<AddNewPost />} />
          <Route path="redingBlog/:id" element={<SingleBlogDetails />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
