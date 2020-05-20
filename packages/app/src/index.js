import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from './context/Provider';
import ApolloProvider from './components/ApolloProvider';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Routes from './routes';




import 'antd/dist/antd.css';

function App() {
 

  return (
    
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
  

  );
}

ReactDOM.render(<App />, document.getElementById('root'));
