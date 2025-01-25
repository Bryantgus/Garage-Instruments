import Key from "./Key"
import { useState, useEffect } from "react"

export default function Piano() {
    const keys =
        { white:[
        "C4", "D4", "E4", "F4", "G4", "A4", "B4",
        "C5", "D5", "E5", "F5", "G5", "A5", "B5",
        "C6", "D6", "E6", "F6", "G6", "A6", "B6",
        ],
        black:[
            "Db4", "Eb4", "Gb4", "Ab4", "Bb4",
            "Db5", "Eb5", "Gb5", "Ab5", "Bb5",
            "Db4", "Eb4", "Gb4", "Ab4", "Bb4",
            
        ]}
    
    function playKeys(note) {
        const audio = new Audio(`/Piano/${note}.mp3`); 
        audio.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
    })
        }

    return (
        <div className="keysContainer">
            <div className="whiteKeys">
                {keys.white.map((item, index) => {
                    return (
                        <Key 
                        key={index}
                        note={item}
                        color={"white"}
                        pushColor={"blue"}
                        playKey={playKeys}
                        />
                    )
                })}
            </div>
            <div className="blackKeys">
                {keys.black.map((item, index) => {
                    return (
                        <Key 
                        key={index}
                        note={item}
                        color={"black"}
                        pushColor={"red"}
                        playKey={playKeys}
                        />
                    )
                })}
            </div>
        </div>
    )
}