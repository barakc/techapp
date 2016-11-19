export default function (state = {}, action) {

    switch (action.type) {
        case "SERVER_SELECTED":
            return action.payload;
            break;
        case "USER_SELECTED":
            return action.payload;
            break;
    }

    return state;
};