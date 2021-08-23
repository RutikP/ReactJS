const redux = require('redux');

const InitialItem = {
    Items: [],
    TotalPrice: 0
};

let existingItems = []
const itemsReducer = (state = InitialItem, action) => {
if(action.type === 'addItem'){
    var updatedItems;
    existingItems = [...state.Items]
    const existingCartItemIndex = existingItems.findIndex(item => item.id === action.item.id )
    const existingCartItem = existingItems[existingCartItemIndex]
    if(existingCartItem){
        // console.log("In Index.js")
        // console.log(existingItems[existingCartItemIndex]['amount'])
        existingItems[existingCartItemIndex]['amount'] = existingItems[existingCartItemIndex]['amount'] + 1
        updatedItems = existingItems
    }
    if(!existingCartItem){
        updatedItems = existingItems.concat(action.item)
    }
    return {
        Items: updatedItems,
        TotalPrice: state.TotalPrice
    }
    
}
if(action.type === 'incAmount'){
    existingItems = [...state.Items]
    // id = action.payload.id
    let item = existingItems.filter(item => item.id === action.payload.id)
    item[0]['amount'] = item[0]['amount'] + 1
    // console.log(item[0]['amount'])
    return {
        Items: existingItems,
        amount: item[0]['amount'],
        TotalPrice: state.TotalPrice
    }
    
}
if(action.type === 'decAmount'){
    existingItems = [...state.Items]
    // id = action.payload.id
    let item = existingItems.filter(item => item.id === action.payload.id)
    item[0]['amount'] = item[0]['amount'] - 1
    // console.log(item[0]['amount'])
    if(item[0]['amount'] === 0){
        existingItems = existingItems.filter(item =>{
          return  item.id !== action.payload.id
        });
        item[0]['amount'] = 1
    }
    return {
        Items: existingItems,
        amount: item[0]['amount'],
        TotalPrice: state.TotalPrice
    }
    
}

if(action.type === 'deleteItem'){
    existingItems = [...state.Items]
    action.item.amount = 1
    existingItems = existingItems.filter(item =>{
        return  item.id !== action.item.id
      });
    // updatedItems = existingItems
    return {
        Items: existingItems,
        amount: 1,
        TotalPrice: state.TotalPrice
    }
}

// if(action.type === 'clearItems'){
//     return {
//         state : InitialItem
//     }
// }

    return state
}

const store = redux.createStore(itemsReducer);

export default store;