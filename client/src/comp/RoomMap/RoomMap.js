import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";

import { fetchRoom } from '../../actions/room/room.action';
import { FlexibleXYPlot, LineSeries, MarkSeries } from 'react-vis';

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
                console.log("Each [x,y] ", [x,y] )
                coords.push([x,y])
                room_index += 1
            }
            y += 1
        }
        
        this.setState({coordiantes: coords})
    }
    render() {
        const { fetching, rooms } = this.props;
        console.log("Graph coordinates", this.state.coordiantes)
        return (
            <div className="room-map">
                {/* {!fetching &&
                    rooms.map(({ id, ...otherRoomProps }) => (
                        <Room key={id} {...otherRoomProps} />
                    ))} */}

            <FlexibleXYPlot>

            <MarkSeries
            className="mark-series-example"
            strokeWidth={2}
            opacity="1"
            size={this.state.graphWidth}
            colorType="literal"
            data={this.state.coordinates}
            style={{ cursor: 'pointer', transition: 'all .2s' }}
            // // Get the id and travels to that node onClick
            // onValueClick={datapoint => {
            //   for (let key in graph) {
            //     if (
            //       graph[key][0].x === datapoint.x &&
            //       graph[key][0].y === datapoint.y
            //     ) {
            //       travelToNode(parseInt(key));
            //       this.setState({ value: key });
            //     }
            //   }
            // }}
            // // Show the id of the moused over node in the UI
            // onValueMouseOver={datapoint => {
            //   for (let key in graph) {
            //     if (
            //       graph[key][0].x === datapoint.x &&
            //       graph[key][0].y === datapoint.y
            //     ) {
            //       this.setState({ value: key });
            //     }
            //   }
            // }}
            // onValueMouseOut={() => {
            //   this.setState({ value: null });
            // }}
          />

            </FlexibleXYPlot>
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
