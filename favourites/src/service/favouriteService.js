import {BehaviorSubject} from 'rxjs'

export const favouriteList = new BehaviorSubject([])

export function addToFavourites(favourite) {
    const allreadyAdded = favouriteList.value.find(({id}) => id = favourite.id)
    if(!allreadyAdded) {
        favouriteList.next([...favouriteList.value, favourite])
    }
}

export function removeFromFavourites(favourite) {
    const filteredList = favouriteList.value.filter(({id}) => id !== favourite.id)
    favouriteList.next(filteredList)
}

export function resetFavourites() {
    favouriteList.next([])
}
