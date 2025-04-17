import './App.css';
import PreLoader from './animations/preloader/preloader';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Phorography from './pages/photography/photography';
import { CursorProvider } from './components/cursor/CursorContext';
import Navbar from './components/navbar/navbar';


function App() {


 return (
   <CursorProvider>
   <div className="App">
     <HashRouter>
       <Navbar />
       <PreLoader />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/photography" element={<Phorography />} />
       </Routes>
     </HashRouter>
   </div>
   </CursorProvider>
 );
}


export default App;
