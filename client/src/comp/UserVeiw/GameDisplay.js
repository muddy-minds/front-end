import React from 'react'
import "gamedisplay.sass"
import Input from './Input'
import Logs from './Logs'
import Map from './Map'
import Inventory from './Inventory'

function GameDisplay() {
    return (
        <>
        <Nav />
       <Map />
       <Logs />
       <Input />
       <Inventory />
       <Footer />
       </>
    )
}

export default GameDisplay
