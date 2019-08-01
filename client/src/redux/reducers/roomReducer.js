import { roomActionType } from '../../actions';

const INITIAL_STATE = {
    rooms: [],
    fetching: false,
    error: null
};

const roomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case roomActionType.FETCH_ROOM_START:
            return {
                ...state,
                fetching: true,
                rooms: [],
                error: null
            };
        case roomActionType.FETCH_ROOM_SUCCESS:
            return {
                ...state,
                fetching: false,
                rooms: action.payload,
                error: null
            };
        case roomActionType.FETCH_ROOM_FAILURE:
            return {
                ...state,
                fetching: false,
                rooms: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default roomReducer;
