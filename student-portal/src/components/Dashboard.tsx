import type { RegisterData } from "../types/types";

type DashboardProps = {
  user: Omit<RegisterData, "password">;
  onLogout: () => void;
};

export function Dashboard({ user, onLogout }: DashboardProps) {
  const firstLetter = user.name.charAt(0).toUpperCase() || "?";

  return (
    <div className="dashboard">
      <div className="dashTop">
        <div className="avatar" aria-hidden="true">
          {firstLetter}
        </div>
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p className="loggedIn">You are logged in</p>
        </div>
      </div>

      <div className="infoRow">
        <div className="infoBox">
          <p className="infoLabel">AGE</p>
          <p className="infoValue">{user.age}</p>
        </div>
        <div className="infoBox">
          <p className="infoLabel">ROLE</p>
          <p className="infoValue">{user.role || "—"}</p>
        </div>
      </div>

      <table className="detailsTable">
        <tbody>
          <tr>
            <td className="tableLabel">Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td className="tableLabel">Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td className="tableLabel">Company</td>
            <td>{user.companyName || "—"}</td>
          </tr>
        </tbody>
      </table>

      <button type="button" className="logoutBtn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
