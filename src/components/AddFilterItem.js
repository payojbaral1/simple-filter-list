import React from 'react';

const AddFilterItem = ({ onAddClick, onContainsFilterClick, onClearFilterClick }) => {
    let input;
    return (
        <span>
            <input ref={node => {input = node;}} />
            <button onClick={() => {onAddClick(input.value); input.value='';}}>Add</button>
            <button onClick={() => {onContainsFilterClick(input.value);}}>Contains Filter</button>
            <button onClick={() => {onClearFilterClick(input.value); input.value='';}}>Clear Filter</button>
        </span>
    );
}

export default AddFilterItem;