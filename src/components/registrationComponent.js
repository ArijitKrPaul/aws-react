import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/header.css";
import "../css/registration.css";

export default function RegistrationComponent() {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = React.useState(null);
  const [blood, setBlood] = React.useState(null);
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [age, setAge] = React.useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
    console.log(name, state, number, password, gender, blood, city, age);
    setName("");
    setState("");
    setNumber("");
    setPassword("");
    setGender(null);
    setBlood(null);
    setCity("");
    setAge("");
  };

  return (
    <div>
      <Toolbar id="header">
        <h1>RedDrop</h1>
      </Toolbar>
      <section
        id="register"
        style={{
          backgroundImage: "url('/register.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack spacing={2} id="registration-form">
          <h1>REGISTER</h1>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="filled"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="TextField"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="filled"
            required
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="TextField"
          />

          <TextField
            id="outlined-basic"
            label="State"
            variant="filled"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="TextField"
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="filled"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="TextField"
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="filled"
            type="number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="TextField"
          />
          <TextField
            id="outlined-basic"
            label="Age"
            variant="filled"
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="TextField"
          />
          <FormControl className="SelectField">
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              defaultValue={"null"}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onClick={() => setGender("male")}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onClick={() => setGender("female")}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                onClick={() => setGender("other")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth variant="filled" className="select-blood">
            <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={blood}
              label="Blood Group"
            >
              <MenuItem value={"A+"} onClick={() => setBlood("A+")}>
                A+
              </MenuItem>
              <MenuItem value={"B+"} onClick={() => setBlood("B+")}>
                B+
              </MenuItem>
              <MenuItem value={"AB+"} onClick={() => setBlood("AB+")}>
                AB+
              </MenuItem>
              <MenuItem value={"AB-"} onClick={() => setBlood("AB-")}>
                AB-
              </MenuItem>
              <MenuItem value={"B-"} onClick={() => setBlood("B-")}>
                B-
              </MenuItem>
              <MenuItem value={"A-"} onClick={() => setBlood("A-")}>
                A-
              </MenuItem>
              <MenuItem value={"O+"} onClick={() => setBlood("O+")}>
                O+
              </MenuItem>
              <MenuItem value={"O-"} onClick={() => setBlood("O-")}>
                O-
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            id="registration-btn"
            onClick={handleClick}
          >
            Register
          </Button>
        </Stack>
      </section>
    </div>
  );
}
