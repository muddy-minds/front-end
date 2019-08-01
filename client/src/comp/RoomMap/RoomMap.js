import React from 'react';
import { connect } from 'react-redux';

import { fetchRoom } from '../../actions/room/room.action';

import Room from '../Room/Room';

class RoomMap extends React.Component {

    constructor() {
        this.state = {
            graphData: [],
            graphWidth: 10,
            coordiantes = []
        }
    }

    componentWillMount() {
        axios
        .get("https://muddyminds.herokuapp.com/api/players/")
        .then(response => this.setState({graphData: response.data}))
        .catch(err => console.log("an error occurs", err));

        this.props.fetchRoom();
    }

    addCoordinates = () => {
        y = 0
        room_index = 0

        // we loop through all rooms in graph 
        while (room_index != len(this.state.graphData)) {  
            
            // we add coordinates per row, and go to next row, until we 
            // have added all rooms 
            for (let x = 0; x < this.state.graphWidth; x++) {
                graphData[room_index].append([x,y])
                coordinates.append([x,y])
                room_index += 1
            }
            y += 1
        }
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
