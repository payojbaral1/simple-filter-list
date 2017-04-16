import { connect } from 'react-redux';
import {addItemActionCreator, containsFilterItemActionCreator, clearFilterItemActionCreator} from '../actions/itemActionCreators';
import AddFilterItem from './AddFilterItem';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (itemText) => dispatch(addItemActionCreator(itemText)),
        onContainsFilterClick: (itemText) => dispatch(containsFilterItemActionCreator(itemText)),
        onClearFilterClick: (itemText) => dispatch(clearFilterItemActionCreator(itemText))
    }
};

export default connect(null, mapDispatchToProps)(AddFilterItem);