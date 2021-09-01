import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SignIn from "./components/signIn/SignIn";
import Dashboard from "./components/dashboard/Dashboard";

const App = ({ state, isAuthenticated }) => {
  console.log(state);
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Box p={4} component='main' className='App'>
        <Route path='/login' exact strict component={SignIn} />
        <Route
          path='/'
          exact
          strict
          render={() =>
            isAuthenticated ? <Dashboard /> : <Redirect to='/login' />
          }
        />
        <Redirect to='/login' component={SignIn} />
      </Box>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  state,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);
