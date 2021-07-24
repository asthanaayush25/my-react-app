import {Link} from 'react-router-dom';

import FavouritesContext from '../../store/favourites-context';
import { useContext } from 'react';
import cf from './MainNavigation.module.css';

function MainNavigation()
{
  const favouritesCtx=useContext(FavouritesContext);
  return(
    <header className={cf.header}>
    <div className={cf.logo}>React Meetups</div>
    <nav>
    <ul>
    <li>
    <Link to ='/'>All meetup</Link>
    </li>
    <li>
    <Link to ='/new-meetup'>Add new Meetups</Link>
    </li>
    <li>
    <Link to ='/favourites'>My favourites
    <span className={cf.badge}>{favouritesCtx.totalFavoritres}</span>
    </Link>
    </li>
    </ul>
    </nav>
    </header>
  );
}
export default MainNavigation;
