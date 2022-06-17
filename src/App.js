import './App.css'
import ChildNavbar from './components/ChildNavbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
    <div className='container mx-auto pr-14 pt-5 pl-14'>
        <Navbar/>
        <ChildNavbar/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
