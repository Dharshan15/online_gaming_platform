import React, { useEffect, useState } from 'react';
import '../cssPages/LandingPage.css';
import axios from 'axios';
import '../cssPages/Esport.css';
import Navigation from './Navigation';

const Esport = () => {
  const [tournaments, setTournaments] = useState([]);
  const [newTournament, setNewTournament] = useState({
    tournamentName: '',
    gameName: '',
    prizeMoney: '',
  });
  const [updateTournament, setUpdateTournament] = useState({
    tournamentName: '',
    gameName: '',
    prizeMoney: '',
  });
  const [showAddSection, setShowAddSection] = useState(false);
  const [showUpdateSection, setShowUpdateSection] = useState(false);
  const [tournamentToUpdate, setTournamentToUpdate] = useState(null);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tournaments/getall');
      setTournaments(response.data);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (showAddSection) {
      setNewTournament((prevTournament) => ({
        ...prevTournament,
        [name]: value,
      }));
    } else if (showUpdateSection && tournamentToUpdate) {
      setUpdateTournament((prevTournament) => ({
        ...prevTournament,
        [name]: value,
      }));
    }
  };

  const handleAddTournament = async () => {
    try {
      await axios.post('http://localhost:8080/tournaments/post', newTournament);
      fetchTournaments();
      setNewTournament({
        tournamentName: '',
        gameName: '',
        prizeMoney: '',
      });
    } catch (error) {
      console.error('Error adding tournament:', error);
    }
  };

  const handleUpdateTournament = async () => {
    try {
      await axios.put(`http://localhost:8080/tournaments/edit/${tournamentToUpdate.id}`, updateTournament);
      fetchTournaments();
      setTournamentToUpdate(null);
      setUpdateTournament({
        tournamentName: '',
        gameName: '',
        prizeMoney: '',
      });
    } catch (error) {
      console.error('Error updating tournament:', error);
    }
  };

  const handleDeleteTournament = async (tournamentId) => {
    try {
      await axios.delete(`http://localhost:8080/tournaments/delete/${tournamentId}`);
      fetchTournaments();
    } catch (error) {
      console.error('Error deleting tournament:', error);
    }
  };

  const toggleAddSection = () => {
    setShowAddSection(!showAddSection);
    setShowUpdateSection(false);
    setTournamentToUpdate(null);
  };

  const toggleUpdateSection = (tournamentId) => {
    setShowUpdateSection(!showUpdateSection);
    setShowAddSection(false);

    if (tournamentId) {
      const tournamentToUpdate = tournaments.find((tournament) => tournament.id === tournamentId);
      setTournamentToUpdate(tournamentToUpdate);
      setUpdateTournament({
        tournamentName: tournamentToUpdate.tournamentName,
        gameName: tournamentToUpdate.gameName,
        prizeMoney: tournamentToUpdate.prizeMoney,
      });
    } else {
      setTournamentToUpdate(null);
      setUpdateTournament({
        tournamentName: '',
        gameName: '',
        prizeMoney: '',
      });
    }
  };

  return (
    <>
      <section className="vs">
        <Navigation />
      </section>
      <div>
        <h1>Tournaments</h1>

        <table className="tournament-table">
          <thead>
            <tr>
              <th className="table-heading">Tournament</th>
              <th className="table-heading">Game</th>
              <th className="table-heading">Prize Money</th>
              <th className="table-heading">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((tournament) => (
              <tr key={tournament.id}>
                <td>{tournament.tournamentName}</td>
                <td>{tournament.gameName}</td>
                <td>{tournament.prizeMoney}</td>
                <td>
                  <button onClick={() => toggleUpdateSection(tournament.id)}>Update</button>
                  <button onClick={() => handleDeleteTournament(tournament.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={toggleAddSection}>Host Tournament</button>
        
        {showAddSection && (
          <div className="add-tournament">
            <h2>Add Tournament</h2>
            <input
              type="text"
              name="tournamentName"
              placeholder="Tournament Name"
              value={newTournament.tournamentName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="gameName"
              placeholder="Game Name"
              value={newTournament.gameName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="prizeMoney"
              placeholder="Prize Money"
              value={newTournament.prizeMoney}
              onChange={handleInputChange}
            />
            <button onClick={handleAddTournament}>Add</button>
          </div>
        )}

        {showUpdateSection && tournamentToUpdate && (
          <div className="update-tournament">
            <h2>Update Tournament</h2>
            <div key={tournamentToUpdate.id}>
              <input
                type="text"
                name="tournamentName"
                placeholder="Tournament Name"
                value={updateTournament.tournamentName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="gameName"
                placeholder="Game Name"
                value={updateTournament.gameName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="prizeMoney"
                placeholder="Prize Money"
                value={updateTournament.prizeMoney}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateTournament}>Update</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Esport;
