

const initialState={
    cart:{}
    
}

export default function RootReducer(state=initialState,action){
 switch(action.type)
 {
   case "ADD_ITEM":
       state.cart[action.payload[0]]=action.payload[1]
       console.log("StoreDDaaattaa-__->",state.cart)
       return {cart:state.cart}

    case "REMOVE_ITEM":
        delete state.cart [action.payload]
        console.log(state.cart)
        return {cart:state.cart}
    



       default:
       return state    
 }

}