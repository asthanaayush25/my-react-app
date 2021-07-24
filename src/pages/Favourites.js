import { useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavouritesContext from '../store/favourites-context';

function FavouritesPage()


{
  const favouritesCtx=useContext(FavouritesContext);
  let content;
if(favouritesCtx.totalFavoritres===0)
content=<p>You have no Favourites.Start adding some...</p>;
else
content=<MeetupList meetups={favouritesCtx.favourites}/>;
  return(
    <section>
      <h1>My Meetups</h1>
      {content}
    </section>
  );
}
export  default FavouritesPage;
