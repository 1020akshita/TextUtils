import './App.css';
import './Style.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');//wheater dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgba(10, 61, 98,1.0)'
      showAlert("Dark mode has been enable", "danger")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        {/* <Alert Alert={alert} /> */}
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={} /> */}
            {/* <About /> */}
            {/* <Route exact path="/" element={} /> */}
            <Textform showAlert={showAlert} heading="Enter text to analyze Below" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
