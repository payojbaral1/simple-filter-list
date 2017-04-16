import { connect } from 'react-redux';
import ItemList from './ItemList';

const mapStateToProps = (state) => {
    return {
        items: filterItems(state.items, state.filter)
    };
};

const filterItems = (items, filter) => {
    switch (filter.type) {
        case 'CONTAINING': 
           return items.filter(item => item.text.indexOf(filter.text) !== -1);
        case 'SHOW_ALL':
            // Fall through.
        default:
            return items;
    }

};

export default connect(mapStateToProps, null)(ItemList);