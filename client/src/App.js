import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar/Navbar';
import WorkoutsDashboard from './components/workouts/WorkoutsDashboard';
import AuthPage from './components/Auth/AuthPage';
import PrivateRoute from './components/router/PrivateRouter';
//utils
import setAuthToken from './components/utils/setAuthToken';
//context imports
import AuthState from './context/auth/AuthState';
import WorkoutsState from './context/workouts/workoutsState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <WorkoutsState>
        <Router>
          <div className={styles.App}>
            <Navbar />
            <div className={styles.container}>
              <Switch>
                <PrivateRoute exact path="/" component={WorkoutsDashboard} />
                <Route exact path="/login" component={AuthPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </WorkoutsState>
    </AuthState>
  );
}

export default App;
