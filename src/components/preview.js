import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import "../css/header.css";
import "../css/preview.css";

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

export default function PreviewComponent() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");

  const handleClick = () => {
    console.log(state, city, role);
    setState("");
    setCity("");
    setRole("");
  };

  return (
    <div>
      <Toolbar id="header">
        <h1>RedDrop</h1>
      </Toolbar>
      <section id="search-section">
        <Stack spacing={2} id="search-form">
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

          <FormControl fullWidth variant="filled">
            <InputLabel>Role</InputLabel>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <MenuItem value="Recipient">Recipient</MenuItem>
              <MenuItem value="Donor">Donor</MenuItem>
            </Select>
          </FormControl>
          <Button size="medium" onClick={handleClick}>
            Search
          </Button>
        </Stack>
      </section>
    </div>
  );
}
