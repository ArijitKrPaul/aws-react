import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/header.css";
import "../css/registration.css";
export default function AddCampaignComponent() {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [campname, setCampName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");

  const navigate = useNavigate();
  const statesWithCities = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Bomdila"],
    Assam: ["Guwahati", "Dibrugarh", "Jorhat", "Silchar"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba"],
    Delhi: ["New Delhi"],
    Goa: ["Panaji", "Margao", "Vasco da Gama"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    Haryana: ["Chandigarh", "Faridabad", "Gurgaon", "Panipat"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Manipur: ["Imphal"],
    Meghalaya: ["Shillong"],
    Mizoram: ["Aizawl"],
    Nagaland: ["Kohima", "Dimapur"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    Sikkim: ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    Tripura: ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
    Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol"],
  };

  const handleClick = () => {
    console.log(name, date, campname, mail, address, number);
    setName("");
    setDate("");
    setCampName("");
    setMail("");
    setAddress("");
    setNumber("");
    navigate("/home");
    console.log("arijit");
  };
  return (
    <div>
      <Toolbar id="header">
        <h1>RedDrop</h1>
      </Toolbar>
      <section
        id="camp-register"
        style={{
          backgroundImage: "url('/campaign.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack spacing={2} id="registration-form">
          <h1>REGISTER</h1>
          <TextField
            id="outlined-basic"
            label="Campaign Name"
            variant="filled"
            required
            value={campname}
            onChange={(e) => setCampName(e.target.value)}
            className="TextField"
          />
          <TextField
            id="outlined-basic"
            label="Organization Name"
            variant="filled"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="TextField"
          />
          <TextField
            id="outlined-basic"
            label="Date"
            variant="filled"
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="TextField"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="filled"
            required
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="TextField"
          />
          <FormControl fullWidth variant="filled">
            <InputLabel>State</InputLabel>
            <Select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setCity(""); // Reset city when state changes
              }}
            >
              {Object.keys(statesWithCities).map((stateName) => (
                <MenuItem key={stateName} value={stateName}>
                  {stateName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="filled" disabled={!state}>
            <InputLabel>City</InputLabel>
            <Select value={city} onChange={(e) => setCity(e.target.value)}>
              {state &&
                statesWithCities[state].map((cityName) => (
                  <MenuItem key={cityName} value={cityName}>
                    {cityName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            id="filled-multiline-static"
            label="Address"
            multiline
            rows={4}
            variant="filled"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            id="filled-multiline-static"
            label="Contact"
            type="number"
            variant="filled"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            id="registration-btn"
            onClick={handleClick}
          >
            ADD
          </Button>
        </Stack>
      </section>
    </div>
  );
}
