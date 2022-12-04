const cartInitialState = {
  selectedItems: {
    cartItems: [],
    restaurantName: "",
  },
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newState = { ...state };

      if (action.payload.checkBoxValue) {
        newState.selectedItems = {
          cartItems: [...newState.selectedItems.cartItems, action.payload],
          restaurantName: action.payload.restaurantName,
          checkBoxValue: action.payload.checkBoxValue,
        };
      } else {
        const filteredCart = newState.selectedItems.cartItems.filter(
          (item) => item.name !== action.payload.name
        );
        newState.selectedItems = {
          ...newState.selectedItems,
          cartItems: filteredCart,
        };
      }

      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
