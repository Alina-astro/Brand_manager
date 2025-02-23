import './App.css';
import Navigation from './components/navigation/Navigation';
import Welcome from './components/welcome/Welcome';
import Products from './components/products/Products';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Faq from './components/faq/Faq';
import Form from './components/form/Form';
import Contacts from './components/contacts/Contacts';

function App() {

  return (
      <div className="App">
            <Navigation/>
            <Welcome/>
            <Products/>
            <About/>
            <Blog/>
            <Faq/>
            <Form/>
            <Contacts />
        </div>
  );
}

export default App
