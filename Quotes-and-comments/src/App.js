import { Switch, Route, Redirect } from 'react-router-dom';
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import PageNotFound from './pages/PageNotFound';

function App() {
  
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/allquotes"/>
        </Route>
        <Route path="/allquotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/allquotes/:quoteId">
            <QuoteDetail />
        </Route>
        <Route path="/new-quote">
            <NewQuote/>
        </Route>
        <Route path="*">
            <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
