import "./App.css";
import React, { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // signup wale users yahan store honge
  const [users, setUsers] = useState<User[]>([]);

  // tab badalte time sab kuch clear kar do
  function switchForm(login: boolean) {
    setIsLogin(login);
    setName("");
    setEmail("");
    setPassword("");
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);
    setSuccess(false);
  }

  function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(false);

    let emailErr: string | null = null;
    let passErr: string | null = null;

    // 1. pehle basic checks
    if (email === "") emailErr = "Email is required";
    else if (!email.includes("@") || !email.includes(".")) emailErr = "Invalid Email";

    if (password === "") passErr = "Password is required";

    // 2. basic checks pass hue to registered user se match karo
    if (emailErr === null && passErr === null) {
      const user = users.find((u) => u.email === email);

      if (!user) {
        emailErr = "Email not registered";
      } else if (user.password !== password) {
        passErr = "Wrong password";
      }
    }

    setEmailError(emailErr);
    setPasswordError(passErr);
    setSuccess(emailErr === null && passErr === null);
  }

  function handleSignupSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(false);

    let nameErr: string | null = null;
    let emailErr: string | null = null;
    let passErr: string | null = null;

    if (name === "") nameErr = "Name is required";

    if (email === "") emailErr = "Email is required";
    else if (!email.includes("@") || !email.includes(".")) emailErr = "Invalid Email";
    else if (users.some((u) => u.email === email)) emailErr = "Email already registered";

    if (password === "") passErr = "Password is required";
    else if (password.length < 6) passErr = "Password must be at least 6 characters";

    setNameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passErr);

    if (nameErr === null && emailErr === null && passErr === null) {
      setUsers([...users, { name, email, password }]); // user save kar liya
      setSuccess(true);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = e.target.name; // 'name' nahi likha, warna state ke naam se clash hota
    const value = e.target.value;

    if (fieldName === "email") setEmail(value);
    else if (fieldName === "name") setName(value);
    else setPassword(value);

    setSuccess(false);
  }

  return (
    <div className="inputForm">
      <h1>React forms</h1>
      <div className="form_toggle">
        <button className={isLogin ? "active" : ""} onClick={() => switchForm(true)}>
          Login
        </button>
        <button className={!isLogin ? "active" : ""} onClick={() => switchForm(false)}>
          Signup
        </button>
      </div>

      {isLogin ? (
        <div className="loginForm">
          <h5>Login form</h5>
          {/* noValidate: browser ka apna validation band, taaki aapke messages dikhein */}
          <form onSubmit={handleLoginSubmit} noValidate>
            <input type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

            <a href="#" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </a>
            <button type="submit">Login</button>
          </form>
          {success && <p style={{ color: "green" }}>Successful Login!</p>}
          <p>
            Not a member?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                switchForm(false);
              }}>
              Signup Now
            </a>
          </p>
        </div>
      ) : (
        <div className="signupForm">
          <h5>Signup form</h5>
          <form onSubmit={handleSignupSubmit} noValidate>
            <input type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} />
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}

            <input type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

            <button type="submit">Sign up</button>
            {success && <p style={{ color: "green" }}>Account created! You can login now</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
