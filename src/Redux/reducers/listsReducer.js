const SHOW_PROPERTY_ITEM = 'SHOW_PROPERTY_ITEM';
const DELETE_PROPERTY_ITEM = 'DELETE_PROPERTY_ITEM';
const MOVE_PROPERTY_ITEM = 'MOVE_PROPERTY_ITEM';
const UPDATE_NEW_PROPERTY_TEXT = 'UPDATE_NEW_PROPERTY_TEXT';
const DELETE_PROPERTY_TEXT = 'DELETE_PROPERTY_TEXT';
const ADD_NEW_PROPERTY = 'ADD_NEW_PROPERTY';

const initialState = {
  properties: [
    {id: 1, propertyText: 'Plus 123', type: 'plus'},
    {id: 2, propertyText: 'Plus 456', type: 'plus'},
    {id: 3, propertyText: 'Minus 789', type: 'minus'},
    {id: 4, propertyText: 'Minus 1011', type: 'minus'},
  ],
  newPropertyText: '',
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROPERTY_ITEM:
      return {
        ...state.properties
      }
    case DELETE_PROPERTY_ITEM:
      return {
        // ...state.properties.map(item => {
        //   if (item.id === action.propertyId) {
        //     delete state.item
        //   }
        // })
      }
    case MOVE_PROPERTY_ITEM:
      return {
        // ...state.properties.map(item => {
        //   if (item.id === action.propertyId) {
        //     item.type = action.propertyType
        //   }
        // })
      }
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
    default:
      return state;
  }
};

export const showPropertyItemAC = () => ({ type: SHOW_PROPERTY_ITEM });

export const deletePropertyItemAC = (propertyId) => ({ type: DELETE_PROPERTY_ITEM });

export const movePropertyItemAC = (propertyId, propertyType) => ({ type: MOVE_PROPERTY_ITEM });

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


export default listsReducer;
