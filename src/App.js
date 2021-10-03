import './App.css';
import Routes from './Router/Routes'

import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Routes />
    </Router>
  );
}