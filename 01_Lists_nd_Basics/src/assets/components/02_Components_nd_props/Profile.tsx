import "./foundation.css";

export function Profile() {
  const name: string = "Dev kumar";
  const birthY: number = 2003;
  const city: string = "Bhikhiwind, Asr.";
  const role: string = "Jr SE Intern";

  function DOB(year: number): number {
    const currentYear: number = new Date().getFullYear();
    return currentYear - year;
  }

  return (
    <div id="profile">
      <h3 id="name">
        <strong>Name : </strong>
        {name}
      </h3>
      
      <h3
        id="birth"
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <strong>Age : </strong>
        {DOB(birthY)},{" "}
        {DOB(birthY) > 18 ? <span>Adult</span> : <span>Child</span>}
      </h3>

      <h3 id="city">
        <strong>City : </strong>
        {city}
      </h3>
      <h3 id="role">
        <strong>Role : </strong>
        {role}
      </h3>

      <p id="about">
        Hi, I am {name}, currently living in {city} and I am currently {role}.
        and i am learning
      </p>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next JS</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}

export default Profile;
