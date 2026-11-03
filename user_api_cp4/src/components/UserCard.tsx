import type { User } from "../types/type";
import "./component.css";
type UserCardProps = {
  user: User;
  isChecked?: boolean;
  onToggle: (id: number) => void;
};

export function UserCard({ user, isChecked, onToggle }: UserCardProps) {
  return (
    <div className="userCard">
      <input type="checkbox" checked={isChecked} onChange={() => onToggle(user.id)} />
      <img src={user.image} alt={user.firstName} width={100} />

      <div>
         {isChecked ? <p style={{color:"blue"}}>contacted</p> : <p style={{color:"red"}}>Not contacted</p>}
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>{user.role}</p>

        <p>ID: {user.id}</p>
        <p>
          <span>Email:</span> {user.email}
        </p>
        <p>
          <span>Phone:</span> {user.phone}
        </p>
        <p>
          <span>DOB:</span> {user.birthDate}
        </p>
        <p>
          <span>Blood:</span> {user.bloodGroup}
        </p>
        <p>
          <span>Company:</span> {user.company.name}
        </p>
        <p>
          <span>Dept:</span> {user.company.department}
        </p>
        <p>
          <span>Location:</span> {user.address.city}, {user.address.country}
        </p>
        <p>
          {user.address.city}, {user.address.country}
        </p>
      </div>
    </div>
  );
}
