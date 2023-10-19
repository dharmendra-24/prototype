import React, { useState } from "react";

function PlayerList({ players, selectedPlayers, onPlayerSelection }) {
    return (
        <div>
            <h2>Player List Team 1</h2>
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

function Team({ selectedPlayers, extras }) {
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


function App() {
    const players = [
        { id: "Mitchell Marsh", name: "Mitchell Marsh" },
        { id: "David Warner", name: "David Warner" },
        { id: "Steven Smith", name: "Steven Smith" },
        { id: "Marnus Labuschagne", name: "Marnus Labuschagne" },
        { id: "josh Inglis(w)", name: "josh Inglis(w)" },
        { id: "Glenn Maxwell", name: "Glenn Maxwell" },
        { id: "Marcus Stoinis", name: "Marcus Stoinis" },
        { id: "Mitchell Starc", name: "Mitchell Starc" },
        { id: "pat Cummins(c)", name: "pat Cummins(c)" },
        { id: "Adam Zampa", name: "Adam Zampa" },
        { id: "Josh Hazlewood", name: "Josh Hazlewood" },
        { id: "Sean Abbott", name: "Sean Abbott" },
        { id: "Travis Head", name: "Travis Head" },
        { id: "Alex Carey", name: "Alex Carey" },
        { id: "Cameron Green", name: "Cameron Green" },

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
            <PlayerList
                players={players}
                selectedPlayers={selectedPlayers}
                onPlayerSelection={handlePlayerSelection}
            />
            <Team selectedPlayers={selectedPlayers} />
        </div>
    );
}

export default App;
