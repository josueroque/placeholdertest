import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, makeStyles } from "@mui/material";
import Modal from "./Modal";
import { Link } from "react-router-dom";
export default function ActionAreaCard({ component, url, title, id }) {
  console.log(id);
  return (
    <Card
      sx={{ width: 345, height: 250, overflow: "scroll" }}
      style={{ margin: "10px" }}
    >
      <Link to={`/photos/${id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={url} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Description: ${title}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
