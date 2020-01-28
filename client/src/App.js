import React, { Fragment } from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import WorkoutsState from './context/workouts/workoutsState';
import WorkoutsDashboard from './components/workouts/WorkoutsDashboard';

function App() {
  return (
    <WorkoutsState>
      <Router>
        <div className={styles.App}>
          <Navbar />
          <div className={styles.container}>
            <Switch>
              <Route path="/" component={WorkoutsDashboard} />
              <Route path="/login" />
            </Switch>
          </div>
        </div>
      </Router>
    </WorkoutsState>
  );
}

export default App;
