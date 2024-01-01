import dropdownType from "./action-type";

const initialDropdown = {
  isOpen: false,
};

const dropdownReducer = (state = initialDropdown, action) => {
  switch (action.type) {
    case dropdownType.OPEN_DROPDOWN:
      return { ...state, isOpen: true };
    
    case dropdownType.CLOSE_DROPDOWN:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};


export default dropdownReducer