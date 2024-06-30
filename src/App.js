import './App.css';
import PreLoader from './animations/preloader/preloader';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import { CursorProvider } from './components/cursor/CursorContext';

function App() {

  return (
    <CursorProvider>
    <div className="App">
      <HashRouter>
        <PreLoader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
    </CursorProvider>
  );
}

export default App;
