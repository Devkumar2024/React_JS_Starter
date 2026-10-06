// Challenge 1 of 3: Extract a component 
// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

import { getImageUrl } from './utils.js';

function Profile( {name, profession, awardNumber, awardList, discovered, id, size} ){
  return (
    <section className = "profile">
     <h2>{name}</h2>
      <img className = "avatar" src = {getImageUrl(id)}
        alt = {name} 
        width = {size}
        height = {size}/>
       <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awardNumber} </b>
           {"(" + awardList.join(", ")  +")"}
          </li>
          <li>
            <b>Discovered: </b>
           {discovered}
          </li>
        </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Profile name = "Maria Skłodowska-Curie" 
          profession = "physicist and chemist"
          awardNumber = {4}
          awardList = {["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
          discovered = "polonium (chemical element)"
          id = "szV5sdG"
          size = {70}
          />

         <Profile name = "Katsuko Saruhashi" 
          profession = "geochemist"
          awardNumber = {2}
          awardList = {["Miyake Prize for geochemistry", "Tanaka Prize"]}
          discovered = "a method for measuring carbon dioxide in seawater"
          id = "YfeOqp2"
          size = {70}
          />
       </section>
    </div>
  );
}


