import {Route,Switch} from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetup';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';


function App() {
  return (
    
    <Layout>
    <Switch>
    <Route path='/' exact>
    <AllMeetupPage/>
    </Route>
    <Route path='/new-meetup'>
    <NewMeetupPage/>
    </Route>
    <Route path='/favourites'>
    <FavouritesPage/>
    </Route>
    </Switch>
    </Layout>

  );
}

export default App;
