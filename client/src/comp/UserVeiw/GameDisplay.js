import React from 'react'
import "./gamedisplay.sass"
import Input from './Input'
import Logs from './Logs'
import Map from './Map'
import Inventory from './Inventory'
import Nav from './Nav'
import Footer from './Footer'

function GameDisplay() {
    return (
        <div className="parent">
            <div className="nav">
                <Nav  />
            </div>
            <div className="header">
            /$$      /$$ /$$   /$$ /$$$$$$$        /$$                 /$$      /$$ /$$                 /$$     <br/>     
| $$$    /$$$| $$  | $$| $$__  $$      | $$                | $$$    /$$$|__/                | $$                <br/>    
| $$$$  /$$$$| $$  | $$| $$  \ $$  /$$$$$$$ /$$   /$$      | $$$$  /$$$$ /$$ /$$$$$$$   /$$$$$$$  /$$$$$$$      <br/>    
| $$ $$/$$ $$| $$  | $$| $$  | $$ /$$__  $$| $$  | $$      | $$ $$/$$ $$| $$| $$__  $$ /$$__  $$ /$$_____/      <br/>           
| $$  $$$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      | $$  $$$| $$| $$| $$  \ $$| $$  | $$|  $$$$$$       <br/>       
| $$\  $ | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      | $$\  $ | $$| $$| $$  | $$| $$  | $$ \____  $$      <br/>       
| $$ \/  | $$|  $$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$      | $$ \/  | $$| $$| $$  | $$|  $$$$$$$ /$$$$$$$/      <br/>    
|__/     |__/ \______/ |_______/  \_______/ \____  $$      |__/     |__/|__/|__/  |__/ \_______/|_______/       <br/>       
                                            /$$  | $$                                                           <br/>    
                                           |  $$$$$$/                                                           <br/>    
                                            \______/                                                            <br/>    
            </div>
            <div  className="map" >
                <Map/>
            </div>
            <div  className="logsArea">
                <Logs/>
            </div>
            <div className="inputArea">
                <Input />
            </div>
            <div className="playerArea" >
                <Inventory />
            </div>
            <div  className="footer">
                <Footer/>
            </div>
       </div>
    )
}

export default GameDisplay
