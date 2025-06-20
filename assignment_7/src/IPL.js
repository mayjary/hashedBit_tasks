import React, { useEffect, useState } from 'react';
import './Ipl.css'

function Ipl() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => a.nrr - b.nrr);
        setTeams(sorted);
      })
      .catch(err => {
        console.error("Failed to fetch:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>IPL 2022 Points Table</h2>
      {teams.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Draws</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.Points}</td>
                <td>{team.NRR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Ipl;
