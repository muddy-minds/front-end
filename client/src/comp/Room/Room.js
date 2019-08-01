import React from 'react';

import './Room.styles.scss';

const Room = ({ name, description }) => {
    return <div className="room">{name}</div>;
};

export default Room;
