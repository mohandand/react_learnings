import { COMMENTS } from '../shared/comments'
import { DISHES } from '../shared/dishes'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'


//Intial State Object
export const intialstate = {
    comments: COMMENTS,
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
}

//Reducer Function.

export const Reducer = (state = intialstate, action) => {
    return state;
};

