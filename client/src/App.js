import React, { Fragment } from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import WorkoutsState from './context/workouts/workoutsState';

import WorkoutsDashboard from './components/workouts/WorkoutsDashboard';
import AuthPage from './components/Auth/AuthPage';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/router/PrivateRouter';
import setAuthToken from './components/utils/setAuthToken';

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
