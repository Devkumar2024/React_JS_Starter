import type { Profile } from "./../types";
import './css/component.css'

type ProfileEditorProps = {
  profile: Profile;
  onNameChange: (name: string) => void;
  onRoleChange: (role: string) => void;
  onToggleNotifications: () => void;
};
export function ProfileEditor({ profile, onNameChange, onRoleChange, onToggleNotifications }: ProfileEditorProps) {
  const { name, role, notificationsEnabled } = profile;
  return (
    <div className="profileEditor">
      <p>Name : {name}</p>
      <p>Role : {role}</p>
      <p>notificationsEnabled : {notificationsEnabled ? "On" : "Off"}</p>

      {/* parent se values neeche aayengi and ye trigger karayega */}
      <input type="text" value={name} onChange={(e) => onNameChange(e.target.value)} />
      <input type="text" value={role} onChange={(e) => onRoleChange(e.target.value)} />
      <input type="checkbox" checked={notificationsEnabled} onChange={onToggleNotifications} />
    </div>
  );
}
