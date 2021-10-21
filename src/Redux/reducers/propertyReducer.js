const UPDATE_NEW_PROPERTY_TEXT = 'UPDATE_NEW_PROPERTY_TEXT';
const DELETE_PROPERTY_TEXT = 'DELETE_PROPERTY_TEXT';
const ADD_NEW_PROPERTY = 'ADD_NEW_PROPERTY';

const initialState = {
  properties: [
    {id: 1, propertyText: 'Lorem 123', type: 'plus'},
    {id: 2, propertyText: 'Lorem 456', type: 'plus'},
    {id: 3, propertyText: 'Lorem 789', type: 'minus'},
    {id: 4, propertyText: 'Lorem 1011', type: 'minus'},
  ],
  newPropertyText: ''
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_PROPERTY_TEXT:
        return {
          ...state,
          newPropertyText: action.text
        }
    case ADD_NEW_PROPERTY:
      return {
        ...state,
        properties: [...state.properties, {
          id: Date.now(),
          propertyText: state.newPropertyText,
          type: action.propertyType
        }],
        newPropertyText: ''
      }
    case DELETE_PROPERTY_TEXT: {
      return {
        ...state,
        newPropertyText: ''
      }
    }
    default: return state
  }
};

export const addNewPropertyAC = (propertyType) => {
 return {
   type: ADD_NEW_PROPERTY,
   propertyType
 }
};

export const deletePropertyAC = () => ({type: DELETE_PROPERTY_TEXT});

export const updateNewPropertyTextAC = (text) => {
  return {
    type: UPDATE_NEW_PROPERTY_TEXT,
    text
  }
};

export default propertyReducer;
