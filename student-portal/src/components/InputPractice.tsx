import React, { useState } from "react";
import "./components.css";

export function InputPractice() {
  const [fullname, setFullname] = useState<string>("");
  const [userName, setuserName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [radioItem, setRadioItem] = useState<string>("male");
  const [selectedItem, setSelectedItem] = useState<string>("Civil");
  const [age, setAge] = useState<number>();
  const [marks, setMarks] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showpassword, setShowPassword] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const [checked, setChecked] = useState<string[]>([]);
  const skills: string[] = ["React-TSX", "NextJS", "TypeScript", "Node JS", "java", "python"];

  function handleTextInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.currentTarget;
    name === "fullName"
      ? setFullname(e.currentTarget.value)
      : name === "userName"
        ? setuserName(e.currentTarget.value)
        : setCity(e.currentTarget.value);
  }

  function handleEmailInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  function handleNumberInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.currentTarget;
    name === "age" ? setAge(Number(e.currentTarget.value)) : setMarks(Number(e.currentTarget.value));
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.currentTarget.value);
  }

  function handleDropDownItems(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedItem(e.currentTarget.value);
  }

  function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRadioItem(e.currentTarget.value);
  }

  function handleCheckedItem(skill: string) {
    if (checked.includes(skill)) {
      setChecked(checked.filter((prev) => prev !== skill));
    } else {
      setChecked((prev) => [...prev, skill]);
    }
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedDate(e.target.value);
  }

  return (
    <div>
      <h1>Input Practice</h1>
      <div className="inputPractice">
        <div className="textField">
          <h5>Text field</h5>
          <input type="text" name="fullName" placeholder="...name" value={fullname} onChange={handleTextInputChange} />
          <input
            type="text"
            name="userName"
            placeholder="...User name"
            value={userName}
            onChange={handleTextInputChange}
          />
          <input type="text" name="city" placeholder="...city" value={city} onChange={handleTextInputChange} />
        </div>

        <div className="emailField">
          <h5>Email field</h5>
          <input type="email" name="email" placeholder="...email" value={email} onChange={handleEmailInputChange} />
          {email.includes("@") && email.includes(".") ? <></> : <p>Invalid Email...</p>}
        </div>

        <div className="passwordField">
          <h5>Password field</h5>
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            placeholder="...passowrd"
            value={password}
            onChange={handlePasswordInputChange}
          />
          <button onClick={() => setShowPassword((prev) => !prev)}>Show</button>
          {password.length > 6 ? <></> : <p>Make strong password...</p>}
        </div>

        <div className="numberField">
          <h5>Number field</h5>
          <input
            type="number"
            name="age"
            placeholder="...age"
            step="1"
            value={age}
            onChange={handleNumberInputChange}
          />
          <input
            type="number"
            name="marks"
            placeholder="...marks"
            step="0.5"
            value={marks}
            onChange={handleNumberInputChange}
          />
        </div>

        <div className="textArearField">
          <h5>Text Area field</h5>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            name="textarea"
            id="feedback"
            value={text}
            onChange={handleTextAreaChange}
            placeholder="Type your message here..."
            rows={4}
            cols={50}
          />
          <p>{text}</p>
        </div>

        <div className="dropDownField">
          <h5>Drop Down</h5>
          <select name="dropdown" value={selectedItem} onChange={handleDropDownItems}>
            <option value="Civil">Civil</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechnical">Mechanical</option>
          </select>
          <p>
            Selected: <strong>{selectedItem}</strong>
          </p>
        </div>

        <div className="radioField">
          <h5>Radio field</h5>
          <p>Choose your Gender</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={radioItem === "male"}
              onChange={handleRadioChange}
            />{" "}
            Male 👨
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={radioItem === "female"}
              onChange={handleRadioChange}
            />{" "}
            Female 👩
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="lgbtq"
              checked={radioItem === "lgbtq"}
              onChange={handleRadioChange}
            />{" "}
            prefer not to say
          </label>

          <p>
            You have chosen: <strong>{radioItem}</strong>
          </p>
        </div>

        <div className="checkBoxField">
          <h5>checkBoxField</h5>
          {skills.map((skill) => (
            <label key={skill}>
              <input type="checkbox" checked={checked.includes(skill)} onChange={() => handleCheckedItem(skill)} />{" "}
              {skill}
            </label>
          ))}
          <p>{checked.length > 0 ? checked.join(", ") : "None"}</p>
        </div>

        <div className="dateField">
          <h3>Select a Date:</h3>
          <input type="date" value={selectedDate} onChange={handleDateChange} />

          <div style={{ marginTop: "16px" }}>
            <strong>Selected Date: </strong>
            {selectedDate ? selectedDate : "No date selected"}
          </div>
        </div>
      </div>
    </div> 
  );
}
