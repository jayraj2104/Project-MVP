import "./Dashboard.css";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="dashboard">

      <Navbar />

      <div className="dashboard-content">

        <div className="dashboard-header">
          <h1>Dashboard</h1>

          <p>
            Manage your tasks efficiently
          </p>
        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>Total Tasks</h2>
            <p>12</p>
          </div>

          <div className="dashboard-card">
            <h2>Completed</h2>
            <p>8</p>
          </div>

          <div className="dashboard-card">
            <h2>Pending</h2>
            <p>4</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;