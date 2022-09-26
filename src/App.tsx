import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
          <Header />
          <Container maxWidth="xl" component='main'>
              <Outlet/>
          </Container>
          <Footer />
      </>
  );
}

export default App;
