import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";

import { fetchRoom } from '../../actions/room/room.action';
import { XYPlot, LineSeries, MarkSeries } from 'react-vis';

import Room from '../Room/Room';

// Maps
// https://github.com/rytwalker/treasure-hunt/blob/master/src/components/Map.js

class RoomMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            graphData: [],
            graphWidth: 10,
            coordiantes: []
        }
    }

    componentWillMount() {
        // axios
        // .get("https://muddyminds.herokuapp.com/api/rooms/")
        // .then(response => this.setState({graphData: response.data}))
        // .catch(err => console.log("an error occurs", err));
        this.addCoordinates()
        this.props.fetchRoom();
    }

    addCoordinates = () => {
        let y = 0
        let room_index = 0

        let coords = []
        // we loop through all rooms in graph 
        while (room_index != 20) {  
            
            // we add coordinates per row, and go to next row, until we 
            // have added all rooms 
            for (let x = 0; x < this.state.graphWidth; x++) {
                // this.state.graphData[room_index].append([x,y])
                console.log("Each [x,y] ",{"x": x, "y": y })
                coords.push({"x": x, "y": y })
                room_index += 1
            }
            y += 1
        }
        
        this.setState({coordiantes: coords})
    }


    render() 
    {   
        return (
        <div className="div">
                <XYPlot width={300}
                height={300}>

                <MarkSeries 
                className="mark-series-example"
                strokeWidth={2}
                opacity="1"
                size={this.state.graphWidth}
                colorType="literal"
                data={this.state.coordiantes}
                style={{ cursor: 'pointer', transition: 'all .2s' }}
                />

                </XYPlot>
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
