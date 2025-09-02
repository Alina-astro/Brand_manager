import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Welcome from './components/welcome/Welcome';
import Products from './components/products/Products';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Faq from './components/faq/Faq';
import Form from './components/form/Form';
import Contacts from './components/contacts/Contacts';
import Offerings from "./components/offerings/Offerings";

function App() {

    return (
        <Router>
          <div className="App">
            <header>
              <Navigation />
            </header>
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Welcome />
                      <Products />
                      <About />
                      <Blog />
                      <Faq />
                      <Form />
                    </>
                  }
                />
                <Route path="/offerings" element={<Offerings />} />
              </Routes>
            </main>
            <footer>
              <Contacts />
            </footer>
          </div>
        </Router>
      );
}

export default App
