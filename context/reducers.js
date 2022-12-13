
export const initialState = {
  isDesktop: false,
  isSmall: true,
  isMedium: false,
  isBig: false
};



export const reducer = (state, action) => {
  switch (action.type) {
  case "TEST": {

    return {
      ...initialState
    };
  }
  default:
    return {
      ...initialState, ...action
    };
  }
};

