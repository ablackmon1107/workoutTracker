import React from 'react';
import Register from '.Register';
import Login from './Login';

function App() {
  return (
    <main className="App">
      <Register />
      <Login />
      <Router>
      <Navbar />
      <br />
      <div classname = "container">
        <Route path = "/" exact component = { WorkoutList } />
        <Route path = "/edit/:id" component = { EditWorkout } />
        <Route path = "/create" component = { CreateWorkout } />
        <Route path = "/user" component = { CreateUser } />
      </div>
    </Router>
    </main>
  );
}

export default App;
