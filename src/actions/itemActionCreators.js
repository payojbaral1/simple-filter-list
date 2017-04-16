let nextItemId = 0;
export const addItemActionCreator = (text) => {
    return  {
        type: 'ADD_ITEM',
        item: { text, id: nextItemId++ }
    };
};

export const containsFilterItemActionCreator = (text) => {
    return {
        type: 'CONTAINING',
        text
    };
};

export const clearFilterItemActionCreator = (text) => {
    return {
        type: 'SHOW_ALL'
    };
};