import React from 'react';
import { connect } from 'react-redux';

import { fetchRoom } from '../../actions/room/room.action';

import Room from '../Room/Room';

class RoomMap extends React.Component {
    componentWillMount() {
        this.props.fetchRoom();
    }
    render() {
        const { fetching, rooms } = this.props;
        return (
            <div className="room-map">
                {!fetching &&
                    rooms.map(({ id, ...otherRoomProps }) => (
                        <Room key={id} {...otherRoomProps} />
                    ))}
            </div>
        );
    }
}

const mapStateToProps = ({ roomReducer }, props) => {
    return {
        rooms: roomReducer.rooms,
        fetching: roomReducer.fetching
    };
};

export default connect(
    mapStateToProps,
    { fetchRoom }
)(RoomMap);
