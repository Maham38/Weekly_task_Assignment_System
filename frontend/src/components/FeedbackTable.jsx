function FeedbackTable() {
  return (
    <div className="card">

      <h2>Recent Feedback</h2>

      <table>

        <thead>

          <tr>
            <th>Intern</th>
            <th>Task</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Ali Ahmed</td>
            <td>React Dashboard</td>
            <td>5 ⭐</td>
            <td><span className="status approved">Approved</span></td>
          </tr>

          <tr>
            <td>Sara Khan</td>
            <td>API Integration</td>
            <td>4 ⭐</td>
            <td><span className="status pending">Pending</span></td>
          </tr>

          <tr>
            <td>Ahmed Raza</td>
            <td>Database Module</td>
            <td>5 ⭐</td>
            <td><span className="status approved">Approved</span></td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default FeedbackTable;