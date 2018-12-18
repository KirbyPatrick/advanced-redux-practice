import {combineReducers} from 'redux';

const newComments = (state = 0,action){
  return state;
}

const newTasks = (state = 0,action){
  return state;
}

const newOrders = (state = 0,action){
  return state;
}

const tickets = (state = 0,action){
  return state;
}

const tasks = (state = [],action){
  return state;
}

const rootReducer = combineReducers({
  newComments,newTasks, newOrders, tickets, tasks
 });
 
export default rootReducer;