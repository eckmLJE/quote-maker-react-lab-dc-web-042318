export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let newUpState = [...state];
      let upQuote = newUpState.find(quote => quote.id === action.quoteId);
      upQuote.votes++;
      return newUpState;
    case "DOWNVOTE_QUOTE":
      let newState = [...state];
      let quote = newState.find(quote => quote.id === action.quoteId);
      quote.votes > 0 ? quote.votes-- : null;
      return newState;
    default:
      return state;
  }
};
