import {connect} from 'react-redux';
import PropertyList from './PropertyList';
import {deletePropertyItemAC, editPropertyItemAC, movePropertyItemAC} from '../../Redux/reducers/listsReducer'

const mapStateToProps = (state) => {
  return {
    properties: state.lists.properties,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePropertyItem(propertyId) {
      dispatch(deletePropertyItemAC(propertyId));
    },
    movePropertyItem(propertyId, propertyType) {
      dispatch(movePropertyItemAC(propertyId, propertyType));
    },
    editPropertyItem(propertyId, propertyText) {
      dispatch(editPropertyItemAC(propertyId, propertyText));
    },
  }
};

const PropertyListContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyList);

export default PropertyListContainer;
