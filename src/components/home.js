import { Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../css/card.css";
import "../css/header.css";

export default function CardComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/preview");
  };

  const handleClick1 = () => {
    navigate("/add_campaign");
  };

  const handleClick2 = () => {
    navigate("/add_bank");
  };
  return (
    <div>
      <Toolbar id="header">
        <h1>RedDrop</h1>
      </Toolbar>
      <section
        id="card-area"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card sx={{ maxWidth: 350 }} id="card">
          <CardMedia
            sx={{ height: 220 }}
            image="/1.jpg"
            title="Blood donation"
            id="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DONOR
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Blood donation is a vital act of kindness that saves millions of
              lives each year. Blood donors play a crucial role in healthcare by
              providing life-saving blood to patients in need, including
              accident victims, surgery patients, cancer patients, and
              individuals with blood disorders like sickle cell disease or
              hemophilia.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>
              Donate
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }} id="card">
          <CardMedia
            sx={{ height: 220 }}
            image="/Blood-1.png"
            title="Blood Recipients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              RECIPIENT
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Blood recipients are individuals who require donated blood due to
              medical conditions, surgeries, or emergencies. A steady supply of
              donated blood is essential for their survival and recovery.
              <ul>
                <li>Accident victims</li>
                <li>Surgery patients</li>
                <li>Cancer patients</li>
                <li>Individuals with blood disorders</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>
              Required
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }} id="card">
          <CardMedia
            sx={{ height: 220 }}
            image="/camp-home.jpg"
            title="Blood donation"
            id="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BLOOD DONATION CAMPAIGN
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              A blood donation campaign is an organized event aimed at
              encouraging people to donate blood voluntarily. These campaigns
              are usually conducted by hospitals, blood banks, nonprofit
              organizations, or community groups to ensure a steady supply of
              blood for medical emergencies, surgeries, and patients with
              conditions like anemia or cancer.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick1}>
              ADD
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }} id="card">
          <CardMedia
            sx={{ height: 220 }}
            image="/Blood-Donation-2.jpg"
            title="Blood donation"
            id="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BLOOD BANK
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              A blood bank is a facility that collects, stores, processes, and
              distributes blood and its components for medical use. Blood banks
              play a vital role in saving lives by ensuring a steady and safe
              supply of blood for emergencies, surgeries, and patients with
              chronic illnesses.
              <br></br>Functions of a Blood Bank:
              <ul>
                <li>Collection of blood</li>
                <li>Storage of blood</li>
                <li>Processing of blood</li>
                <li>Distribution of blood</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick2}>
              REGISTER
            </Button>
          </CardActions>
        </Card>
      </section>
    </div>
  );
}
