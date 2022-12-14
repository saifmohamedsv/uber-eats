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
          (item) => item.title !== action.payload.title
        );
        newState.selectedItems = {
          ...newState.selectedItems,
          checkBoxValue: action.payload.checkBoxValue,
          cartItems: filteredCart,
        };
      }

      return newState;
    default:
      return state;
  }
};

export default cartReducer;
