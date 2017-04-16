export default (state= {type: 'SHOW_ALL'}, action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return {type: 'SHOW_ALL'};
        case 'CONTAINING':
            return {type: 'CONTAINING', text: action.text};
        default:
            return state;
    }
}