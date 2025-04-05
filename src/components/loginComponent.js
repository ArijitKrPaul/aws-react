import { Button, Link, Stack, TextField, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/header.css";
import "../css/registration.css";
export default function LoginComponent() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(name, password);
    setName("");
    setPassword("");
    navigate("/home");
  };
  return (
    <div>
      <Toolbar id="header">
        <h1>RedDrop</h1>
      </Toolbar>
      <section
        id="login"
        style={{
          backgroundImage: "url('/login.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack id="login-form" spacing={2}>
          <h2>LOGIN</h2>
          <TextField
            id="name"
            label="Name"
            variant="filled"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="TextField "
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="TextField"
          />

          <Button
            type="submit"
            variant="contained"
            id="login-btn"
            onClick={handleClick}
          >
            Submit
          </Button>
          <p id="link">
            New user?
            <Link href="/register">Register</Link>
          </p>
        </Stack>
      </section>
    </div>
  );
}
