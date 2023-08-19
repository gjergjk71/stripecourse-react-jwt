import './App.css';
import AppRouter from './app.router';
import { Toaster } from 'react-hot-toast';
import NavBarComponent from './components/nav-bar.component';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <NavBarComponent/>
      <AppRouter>
      </AppRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
