import './foundation.css'

export function Profile(){
    const name:string = 'Dev kumar';
    const age:number = 78;
    const city:string = 'Bhikhiwind, Asr.';
    const role:string = 'Jr SE Intern';

    return (
        <div id="profile">
          <h3 id="name"><strong>Name : </strong>{name}</h3>
          <h3 id="age"><strong>Age : </strong>{age}</h3>
          <h3 id="city"><strong>City : </strong>{city}</h3>
          <h3 id="role"><strong>Role : </strong>{role}</h3>
          <p id = "about">Hi, I am {name}, currenlty living in {city} and I am cuurently {role}. and i am lerning</p>
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