import React from 'react'
import './styles/app.css'
import './App.css';
import AppContextProvider from "./context/appContext"
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
  return (
    <div className="App">
<AppContextProvider >
      <Header />
      <Main />
</AppContextProvider>
    </div>
  );
}

export default App;
