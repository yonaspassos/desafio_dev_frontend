const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    let users = [ ...state.users ];
    switch (action.type) {
        case 'ADD':
            const maxId = users.reduce((prev, curr) => {
                if (prev > curr.id) {
                    return prev;
                } else {
                    return curr.id;
                }
                    
            }, 0);
            return {
                ...state,
                users: users.concat({...action.user, id: maxId + 1})
            };
        case 'EDIT':
            const userIndex = users.findIndex(user => user.id === action.user.id);
            users[userIndex] = action.user;
            return {
                ...state,
                users: users
            };
        case 'REMOVE':
            return {
                ...state,
                users: users.filter(user => user.id !== action.userId)
            };
        default:
            return state;
    }
};

export default userReducer;
  