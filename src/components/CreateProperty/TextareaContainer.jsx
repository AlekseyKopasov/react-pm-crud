import {connect} from 'react-redux';
import {addNewPropertyAC, deletePropertyAC, updateNewPropertyTextAC} from '../../Redux/reducers/listsReducer'
import Textarea from './Textarea'

const mapStateToProps = (state) => {
  return {
    newPropertyText: state.lists.newPropertyText,
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

const TextareaContainer = connect(mapStateToProps, mapDispatchToProps)(Textarea);

export default TextareaContainer;
