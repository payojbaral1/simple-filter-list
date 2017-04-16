import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    render() {
        return (
            <div className='item-list'>
                {
                    this.props.items.map((item) => {
                    return (
                        <Item item={item} key={item.id} />
                    );
                })}
            </div>
        );
    }
}

export default ItemList;