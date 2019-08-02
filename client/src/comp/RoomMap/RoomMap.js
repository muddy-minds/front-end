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

// import React, { useState, useEffect, useContext } from "react";
// import { Link, withRouter } from "react-router-dom";
// import axios from "axios";

// const RoomMap = props => {
//   const [playerInput, setPlayerInput] = useState();
//   const [roomInfo, setRoomInfo] = useState({});

//   const submitPlayerInput = e => {};

//   useEffect(() => {
//     axios
//       .get(`https://muddyminds.herokuapp.com/api/rooms/${playerInput}`)
//       .then(res => {
//         console.log(res, "room obj");
//         setRoomInfo(res.data);
//       })
//       .catch(err => {
//         console.log(err.message);
//       });
//   }, []);

//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           name="playerInput"
//           value={playerInput}
//           onChange={e => setPlayerInput(e.target.value)}
//           placeholder="Enter room number to go to that room"
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <div>
//           Room Name: {roomInfo.name}
//           Room Description: {roomInfo.description}

//       </div>
//     </>
//   );
// };

// export default RoomMap;
