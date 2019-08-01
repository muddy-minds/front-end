import { roomActionType } from './room.types';
import axios from 'axios';

// const URL = 'https://muddyminds.herokuapp.com';

export const fetchRoom = () => dispatch => {
    dispatch({ type: roomActionType.FETCH_ROOM_START });

    return axios
        .get('https://muddyminds.herokuapp.com/api/rooms')
        .then(res =>
            dispatch({
                type: roomActionType.FETCH_ROOM_SUCCESS,
                payload: res.data
            })
        )
        .catch(e =>
            dispatch({
                type: roomActionType.FETCH_ROOM_FAILURE,
                payload: e.message
            })
        );
};
