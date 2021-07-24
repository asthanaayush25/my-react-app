import { createContext,useState } from "react";

const FavouritesContext = createContext({
    favourites :[],
    totalFavoritres:0
});

export function FavouritesContextProvider(props){
    const [userFavourites,setUserFavourites]=useState([]);

    function addFavouriteHandler(favouriteMeetup)
    {
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }
    function removeFavouriteHandler(meetUpId){
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.filter(meetup => meetup.id !== meetUpId);
        });
    }

    function isFavouriteHandler(meetUpId)
    {
        return userFavourites.some(meetup => meetUpId===meetup.id);
    }
    const context={
        favourites:userFavourites,
        totalFavoritres:userFavourites.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemIsFavourite:isFavouriteHandler
    };
    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContext;
