import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from './context/Provider';
import ApolloProvider from './components/ApolloProvider';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Routes from './routes';
import { useState } from "react";
import { AuthContext } from "./context/Auth";


import 'antd/dist/antd.css';

function App() {
  //const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState("");//existingTokens
  const [userName, setUserName] = useState("Mentor");
  
  const setTokens = (data) => {
    //localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  var name = "Mentor";

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, userName, setUserName}}>
    <ErrorBoundary>
      <ApolloProvider>
        <ContextProvider>
          <Router>
            <ScrollToTop />
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </ContextProvider>
      </ApolloProvider>
    </ErrorBoundary>
    </AuthContext.Provider>

  );
}

ReactDOM.render(<App />, document.getElementById('root'));
