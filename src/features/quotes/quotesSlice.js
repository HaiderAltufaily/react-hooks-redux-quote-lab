// Action Creators
export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote,
  };
}
export function removeQuote(quoteId) {
  return {
    type: "quotes/remove",
    payload: quoteId,
  };
}
export function upvoteQuote(quoteId) {
  return {
    type: "quotes/upvote",
    payload: quoteId,
  };
}
export function downvoteQuote(quoteId) {
  return {
    type: "quotes/downvote",
    payload: quoteId,
  };
}
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      const newQuotes = state.filter((quote) => quote.id !== action.payload);
      return newQuotes;
    case "quotes/upvote":
      return state.map((quote) => {
        if (quote.id === action.payload) {
          console.log(quote.votes);
          return { ...quote, votes: quote.votes + 1 };
        } else return quote;
      });
    case "quotes/downvote":
      return state.map((quote) => {
        if (quote.id === action.payload && quote.votes > 0) {
          return { ...quote, votes: quote.votes - 1 };
        } else return quote;
      });
    default:
      return state;
  }
}
