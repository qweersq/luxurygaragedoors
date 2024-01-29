// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Page1 />
          </Layout>
        </Route>
        <Route path="/whyus">
          <Layout>
            <Page2 />
          </Layout>
        </Route>
        <Route path="/about-us">
            <Layout>
                <Page3 />
            </Layout>
        </Route>
        <Route path="/page4">
            <Layout>
                <Page4 />
            </Layout>
        </Route>
        <Route path="/page5">
            <Layout>
                <Page5 />
            </Layout>
        </Route>
        <Route path="/page6">
            <Layout>
                <Page6 />
            </Layout>
        </Route>
        <Route path="/page7">
            <Layout>
                <Page7 />
            </Layout>
        </Route>
        <Route path="/page8">
            <Layout>
                <Page7 />
            </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
