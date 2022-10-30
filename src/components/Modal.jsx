import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ActionAreaCard from "./ActionAreaCard";
import { useParams } from "react-router";
import { CardMedia, Card } from "@mui/material";
import { getPhoto } from "../services/apiService";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [photo, setPhoto] = React.useState(null);
  const params = useParams();
  React.useEffect(() => {
    getPhoto(params?.id)
      .then((result) => {
        debugger;
        setPhoto(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {" "}
      {photo ? (
        <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Card sx={{ maxWidth: 345 }} style={{ margin: "10px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={photo.url}
                  alt={photo.title}
                />
              </Card>
            </Box>
          </Modal>
        </div>
      ) : null}
    </>
  );
}
