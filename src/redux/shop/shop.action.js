import { ShopActionTypes } from "./shop.types";
import {
    convertCollectionsSnapShotToMap,
    db,
} from "../../firebase/firebase.utils";

// export const updateCollections = collectionsMap => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
})
export const fetchCollectionsFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error,
})

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = db.collection("collections");
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapShot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error =>dispatch(fetchCollectionsFailure(error.massage)));
    }
}