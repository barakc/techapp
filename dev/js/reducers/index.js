import {combineReducers} from 'redux';
import UserReducer from './Users/reducer-users';
import ServerReducer from './Servers/reducer-servers';
import GroupReducer from './reducer-groups';
import activeAction from './activeAction';

const allReducers = combineReducers({
    users: UserReducer,
    servers: ServerReducer,
    groups: GroupReducer,
    activeAction: activeAction
});

export default allReducers;