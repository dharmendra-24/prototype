import React, { useState } from "react";

function PlayerList2({ players, selectedPlayers, onPlayerSelection }) {
    return (
        <div>
            <h2>Player List Team 2</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedPlayers.includes(player.id)}
                                onChange={() => onPlayerSelection(player.id)}
                            />
                            {player.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Team2({ selectedPlayers, extras }) {
    const playing11 = selectedPlayers.slice(0, 11);
    const extraPlayers = selectedPlayers.slice(11);

    return (
        <div>
            <h2>Playing 11</h2>
            <ul>
                {playing11.map((playerId) => (
                    <li key={playerId}>{playerId}</li>
                ))}
            </ul>
            <h2>Extras</h2>
            <ul>
                {extraPlayers.map((playerId) => (
                    <li key={playerId}>{playerId}</li>
                ))}
            </ul>
        </div>
    );
}


function App1() {
    const players = [
        { id: "Pathum Nissanka", name: "Pathum Nissanka" },
        { id: "kusal Perera", name: "kusal Perera" },
        { id: "Kusal Mendis (c & wk)", name: "Kusal Mendis (c & wk)" },
        { id: "Sadeera Samarawickrama", name: "Sadeera Samarawickrama" },
        { id: "Charith Asalanka", name: "Charith Asalanka" },
        { id: "Dhananjaya de Silva", name: "Dhananjaya de Silva" },
        { id: "Chamika Karunaratne", name: "Chamika Karunaratne" },
        { id: "Dunith Wellalage", name: "Dunith Wellalage" },
        { id: "Maheesh Theekshana", name: "Maheesh Theekshana" },
        { id: "Lahiru Kumara", name: "Lahiru Kumara" },
        { id: "Dilshan MadushankaBenchDushan Hemantha", name: "Dilshan MadushankaBenchDushan Hemantha" },
        { id: "Matheesha Pathirana", name: "Matheesha Pathirana" },
        { id: "Kasun Rajitha", name: "kasun Rajitha" },
        { id: "Dimuth Karunaratne", name: "Dimuth Karunaratne" },
        { id: "Pathum Nissanka", name: "Pathum Nissanka" },

        // Add more players here
    ];

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handlePlayerSelection = (playerId) => {
        if (selectedPlayers.includes(playerId)) {
            setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
        } else {
            setSelectedPlayers([...selectedPlayers, playerId]);
        }
    };

    return (
        <div>
            <h1>Create Your Team</h1>
            <PlayerList2
                players={players}
                selectedPlayers={selectedPlayers}
                onPlayerSelection={handlePlayerSelection}
            />
            <Team2 selectedPlayers={selectedPlayers} />
        </div>
    );
}

export default App1;
