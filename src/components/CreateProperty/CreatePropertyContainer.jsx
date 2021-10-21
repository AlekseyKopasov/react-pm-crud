import {connect} from 'react-redux';
import {addNewPropertyAC, deletePropertyAC, updateNewPropertyTextAC} from '../../Redux/reducers/propertyReducer'
import CreateProperty from './CreateProperty'

const mapStateToProps = (state) => {
  return {
    newPropertyText: state.property.newPropertyText,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProperty(propertyType) {
      dispatch(addNewPropertyAC(propertyType));
    },
    updateNewPropertyText(text) {
      dispatch(updateNewPropertyTextAC(text));
    },
    deletePropertyText() {
      dispatch(deletePropertyAC());
    }
  }
};

const CreatePropertyContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProperty);

export default CreatePropertyContainer;
