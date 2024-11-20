import {createStore} from 'redux'

const initialValue = {
    counter : 0,
}

const reducer = (currentStore = initialValue, action) => {
    if(action.type === "ADD_VALUE"){
        return {counter: currentStore.counter + 1};
    }else if(action.type === "SUB_VALUE"){
        return {counter: currentStore.counter - 1};
    }else if(action.type === "CHANGE_VALUE"){
        return {counter: currentStore.counter + action.payload};
    }
    return currentStore;
}



const store = createStore(reducer)

export default store;