const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADER":
      return {
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
