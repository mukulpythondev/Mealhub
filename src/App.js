
import { createRoot } from 'react-dom/client';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';


const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Body  />
            <Footer />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
