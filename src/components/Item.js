import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className='item'>
                {this.props.item.text}
            </div>
        );
    }
}

export default Item;