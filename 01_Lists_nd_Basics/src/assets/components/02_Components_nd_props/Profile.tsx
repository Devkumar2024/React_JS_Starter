import "./foundation.css";
type ProfileProps = {
  name: string;
  birthYear: number;
  city: string;
  role: string;
  skills: string[];
};

function YOB(year: number): number {
  const currentYear: number = new Date().getFullYear();
  return currentYear - year;
}

export function Profile(props: ProfileProps) {
  const age = YOB(props.birthYear);
  return (
    <div id="profile">
      <h3 id="name">
        <strong>Name : </strong>
        {props.name}
      </h3>

      <h3
        id="birth"
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <strong>Age : </strong>
        {age}, {age > 18 ? <span>Adult</span> : <span>Child</span>}
      </h3>

      <h3 id="city">
        <strong>City : </strong>
        {props.city === "" ? `City name not Given` : props.city}
      </h3>
      <h3 id="role">
        <strong>Role : </strong>
        {props.role === "" ? `Role not assigned` : props.role}
      </h3>

      <p id="about">
        Hi, I am {props.name}, currently living in{" "}
        {props.city === "" ? `Not specified` : props.city} and I am currently{" "}
        {props.role === "" ? `Role not assigned` : props.role}. and i am
        learning
      </p>

      {/* condotional rendering */}

      <p>
        {" "}
        Total skills :{" "}
        {props.skills.length > 0 ? `${props.skills.length}` : `No Skills`}
      </p>

      {props.skills.length > 0 ? (
        <ul>
          {props.skills.map((skill: string) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      ) : (
        <p>No skills</p>
      )}
    </div>
  );
}

// export default Profile;
