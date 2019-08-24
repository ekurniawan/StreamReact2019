import {CREATE_STREAM} from '../actions/types';

export default (state={},action)=>{
    switch(action.type){
        case CREATE_STREAM:
            return {...state,[action.payload.streamid]:action.payload};
        default:
            return state;
    }
   
}