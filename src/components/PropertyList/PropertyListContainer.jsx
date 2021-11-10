import {connect} from 'react-redux';
import PropertyList from './PropertyList';

const mapStateToProps = (state) => {
  return {
    properties: state.lists.properties,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // showPropertyItem() {
    //   dispatch(showPropertyItemAC());
    // },

  }
};

const PropertyListContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyList);

export default PropertyListContainer;
