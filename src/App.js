import React from 'react';
import AuthDetails from './components/AuthDetails';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" Component={SignInPage} />
          <Route path="/signin" Component={SignInPage} />
          <Route path="/signup" Component={SignUpPage} />
        </Routes>
      </Router>
      <AuthDetails />
    </div>
  );
};

export default App;
