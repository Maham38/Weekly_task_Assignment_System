import { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css";
import "./Leaderboard.css";

function Leaderboard() {
  const [interns, setInterns] = useState([]);
const [search, setSearch] = useState("");
const [group, setGroup] = useState("All");

useEffect(() => {
    fetchLeaderboard();
}, []);

const fetchLeaderboard = async () => {
    try {

        const response = await axios.get(
            "http://127.0.0.1:5000/leaderboard"
        );

        setInterns(response.data);

    } catch (error) {

        console.log(error);

    }
};

  // Filter interns based on search
const filteredInterns = interns.filter((intern) => {
  const matchesSearch = intern.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesGroup =
    group === "All" || intern.group === group;

  return matchesSearch && matchesGroup;
});

  // Calculate Summary Data
  const highestScore = Math.max(...interns.map((intern) => intern.score));
  const totalTasks = interns.reduce((sum, intern) => sum + intern.tasks, 0);

  return (
    <div className="container">
      <h1>🏆 Leaderboard</h1>
      <p className="subtitle">
        Track intern and group performance
      </p>

      {/* Summary Cards */}
      <div className="cards">
        <div className="card">
          <h2>{interns.length}</h2>
          <p>Total Interns</p>
        </div>

        <div className="card">
          <h2>{highestScore}</h2>
          <p>Highest Score</p>
        </div>

        <div className="card">
          <h2>{totalTasks}</h2>
          <p>Completed Tasks</p>
        </div>
      </div>

      {/* Search Box */}
     <div className="filters">
  <input
    type="text"
    className="search"
    placeholder="🔍 Search Intern..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="group-filter"
    value={group}
    onChange={(e) => setGroup(e.target.value)}
  >
    <option value="All">All Groups</option>
    <option value="Group 50">Group 50</option>
  </select>
</div>
      {/* Leaderboard Table */}
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Intern</th>
            <th>Group</th>
            <th>Score</th>
            <th>Completed Tasks</th>
          </tr>
        </thead>

        <tbody>
          {filteredInterns.map((intern) => (
            <tr key={intern.rank}>
              <td>
                {intern.rank === 1
                  ? "🥇"
                  : intern.rank === 2
                  ? "🥈"
                  : intern.rank === 3
                  ? "🥉"
                  : intern.rank}
              </td>

              <td>{intern.name}</td>
              <td>{intern.group}</td>
              <td>{intern.score}</td>
              <td>{intern.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;