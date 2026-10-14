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
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <strong>Age : </strong>
        {age},{" "}
        {age > 18 ? <span>Adult</span> : <span>Child</span>}
      </h3>

      <h3 id="city">
        <strong>City : </strong>
        {props.city === "" ? (
          <span style={{ color: "red" }}>City name not Given</span>
        ) : (
          props.city
        )}
      </h3>

      <h3 id="role">
        <strong>Role : </strong>
        {props.role === "" ? (
          <span style={{ color: "red" }}>Role not assigned</span>
        ) : (
          props.role
        )}
      </h3>

      <p id="about">
        Hi, I am {props.name}, currently living in{" "}
        {props.city === "" ? (
          <span style={{ color: "red" }}>Not specified</span>
        ) : (
          props.city
        )}{" "}
        and I am currently{" "}
        {props.role === "" ? (
          <span style={{ color: "red" }}>Role not assigned</span>
        ) : (
          props.role
        )}
        . And I am learning.
      </p>

      {/* Conditional rendering */}

      <p>
        Total skills:{" "}
        {props.skills.length > 0 ? (
          props.skills.length
        ) : (
          <span style={{ color: "red" }}>No Skills</span>
        )}
      </p>

      {props.skills.length > 0 ? (
        <ul>
          {props.skills.map((skill: string) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      ) : (
        <p style={{ color: "red" }}>No skills</p>
      )}

      <hr />
    </div>
  );
}

// export default Profile;