import React from 'react';
import './Style.css';
import { Button, ButtonGroup } from '@material-ui/core';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Simple Chat Room App
        </h1>
        <ButtonGroup>
          <Button variant="contained" color="primary" component={Link} to="/login">
            Login
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/signup">
            Sign Up
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default Home;
