import React, { useState, useEffect } from "react";
import type { SignupInput, LoginInput, SignupInputErrors, LoginInputErrors } from "./types/types";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [newUser, setNewuser] = useState<SignupInput>({
    name: "",
    age: 0,
    email: "",
    company: "",
    password: "",
  });
  const [loginUser, setLoginUser] = useState<LoginInput>({
    email: "",
    password: "",
  });
  const [signupErrors, setSignupErrors] = useState<SignupInputErrors>({});
  const [loginErrors, setLoginErrors] = useState<LoginInputErrors>({});

  // sucess state
  const [success, setSuccess] = useState<boolean>(false);
  // stored users
  const [storedUser, setStoredUser] = useState<SignupInput[]>(() => {
    const saved = localStorage.getItem("myUsers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Jab bhi storedUser badlega, ye line chalegi aur save kar degi
    localStorage.setItem("myUsers", JSON.stringify(storedUser));
  }, [storedUser]); // <-- dependency array: sirf tab chale jab storedUser badle

  function handleMode(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.currentTarget;
    setIsLogin(name === "login");
    setSuccess(false); // mode badla → purana success clear
    setSignupErrors({}); // purane errors bhi clear (warna wahi problem)
    setLoginErrors({});
  }

  function handleSignUpSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // react state updates are asynchronous
    let nameError: string | null = null;
    let ageError: string | null = null;
    let companyError: string | null = null;
    let emailError: string | null = null;
    let passwordError: string | null = null;

    if (newUser.name.trim() === "") nameError = "Name is Required";
    if (newUser.company === "") companyError = "Company name is Required";
    if (!newUser.age || newUser.age <= 0) ageError = "Invalid";

    if (newUser.email === "") emailError = "Email is required";
    else if (!newUser.email.includes("@") || !newUser.email.includes(".")) emailError = "Invalid Email";

    if (newUser.password === "") passwordError = "Password is required";
    else if (newUser.password.length < 6) passwordError = "Password must be at least 6 characters";

    const hasError = nameError || ageError || companyError || emailError || passwordError;

    setSignupErrors({
      name: nameError ?? undefined,
      age: ageError ?? undefined,
      company: companyError ?? undefined,
      email: emailError ?? undefined,
      password: passwordError ?? undefined,
    });

    if (hasError) {
      setSuccess(false);
      return; // ← validation fail → aage mat jao
    }
    setStoredUser((prev) => [...prev, newUser]);
    setSuccess(true);
  }

  function handleLoginSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    let emailError: string | null = null;
    let passwordError: string | null = null;

    // 1. Validation
    if (loginUser.email === "") emailError = "Email is required";
    else if (!loginUser.email.includes("@") || !loginUser.email.includes(".")) emailError = "Invalid Email";

    if (loginUser.password === "") passwordError = "Password is required";
    else if (loginUser.password.length < 6) passwordError = "Password must be at least 6 characters";

    // 2. Agar validation fail hai, toh errors set karke yahin ruk jao (return)
    if (emailError || passwordError) {
      setLoginErrors({
        email: emailError ?? undefined,
        password: passwordError ?? undefined,
      });
      setSuccess(false);
      return;
    }

    // 3. Agar validation pass hai, toh database (storedUser) mein check karo
    const foundUser = storedUser.find((u) => u.email === loginUser.email && u.password === loginUser.password);

    // 4. Match mila ya nahi
    if (foundUser) {
      setLoginErrors({}); // purane errors clear karo
      setSuccess(true);
    } else {
      setLoginErrors({ email: "Invalid email or password" }); // generic error
      setSuccess(false);
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    if (isLogin) {
      setLoginUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setNewuser((prev) => ({
        ...prev,
        [name]: name === "age" ? Number(value) : value,
      }));
    }
  }

  return (
    <div className="mainContainer">
      <h5>React Login form</h5>
      <div className="form_toggle">
        <button type="button" name="login" onClick={handleMode} className={isLogin ? "active" : ""}>
          Login
        </button>
        <button type="button" name="signup" onClick={handleMode} className={!isLogin ? "active" : ""}>
          Sign Up
        </button>
      </div>

      {!isLogin ? (
        <div className="signupForm">
          <form onSubmit={handleSignUpSubmit}>
            <input type="text" name="name" value={newUser.name} placeholder="enter name" onChange={handleChange} />
            {signupErrors.name && <p style={{ color: "red" }}>{signupErrors.name}</p>}

            <input type="text" name="age" value={newUser.age} placeholder="enter age" onChange={handleChange} />
            {signupErrors.age && <p style={{ color: "red" }}>{signupErrors.age}</p>}
            <input
              type="text"
              name="company"
              value={newUser.company}
              placeholder="Company name"
              onChange={handleChange}
            />
            {signupErrors.company && <p style={{ color: "red" }}>{signupErrors.company}</p>}

            <input type="email" name="email" value={newUser.email} placeholder="email" onChange={handleChange} />
            {signupErrors.email && <p style={{ color: "red" }}>{signupErrors.email}</p>}

            <input
              type="password"
              name="password"
              value={newUser.password}
              placeholder="password"
              onChange={handleChange}
            />
            {signupErrors.password && <p style={{ color: "red" }}>{signupErrors.password}</p>}
            <button className="btn" type="submit">
              Submit info
            </button>
            {success && <p style={{ color: "green" }}>Signup successful</p>}
          </form>
        </div>
      ) : (
        <div className="loginForm">
          <form onSubmit={handleLoginSubmit}>
            <input type="email" name="email" value={loginUser.email} placeholder="email" onChange={handleChange} />
            {loginErrors.email && <p style={{ color: "red" }}>{loginErrors.email}</p>}
            <input
              type="password"
              name="password"
              value={loginUser.password}
              placeholder="password"
              onChange={handleChange}
            />
            {loginErrors.password && <p style={{ color: "red" }}>{loginErrors.password}</p>}
            <button className="btn" type="submit">
              Submit info
            </button>
            {success && <p style={{ color: "green" }}>{isLogin ? "Login successful" : "Signup successful"}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
