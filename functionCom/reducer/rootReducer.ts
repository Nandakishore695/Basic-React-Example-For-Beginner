const SET_USER_ID: string = 'setUserID';
const SELECTED_COLLECTION: any = 'selectedCollection';
const SELECTED_Image: any = 'selectedImage';

const setUserID = (payload: string) => {
  return {
    type: SET_USER_ID,
    payload,
  };
};

const selectedCollection = (payload: string) => {
  return {
    type: SELECTED_COLLECTION,
    payload,
  };
};
const selectedImage = (payload: string) => {
  return {
    type: SELECTED_Image,
    payload,
  };
};

const initialState = {
  user: { id: '', name: '' },
  selectedCollection: null,
  selectedImage:null,
};

const rootReducer = (state: any = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_ID:
      state = { ...state, user: payload };
      return state;
    case SELECTED_COLLECTION:
      state = { ...state, selectedCollection: payload };
      return state;
      case SELECTED_Image:
      state = { ...state, selectedImage: payload };
      return state;
    default:
      return state;
  }
};

export default rootReducer;
export { setUserID, selectedCollection,selectedImage };
