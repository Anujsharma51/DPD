const init = {
  data: [],

  isLoading: false,
};

export const EventReducer = (state = init, action) => {
  switch (action.type) {
    case "getData":
      return { ...state, isLoading: false, data: action.payload };
    case "assiending":
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.sort((a, b) => {
            if (a[action.payload] > b[action.payload]) {
              return 1;
            }
            if (a[action.payload] < b[action.payload]) {
              return -1;
            }
            return 0;
          }),
        ],
      };
    case "deassiending":
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.sort((a, b) => {
          

            if (a[action.payload] < b[action.payload]) {
              return 1;
            }
            if (a[action.payload] > b[action.payload]) {
              return -1;
            } 
            return 0;
          }),
        ],
      };

    case "load":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
