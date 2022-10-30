import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Menu from "./Menu";
import React, { useEffect, useState } from "react";
import { getPosts, createComment } from "../services/apiService";
import swal from "sweetalert";

const Comment = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newComment = {
        name,
        email,
        body,
        postId,
      };
      await createComment(newComment);
      swal({ title: "Success", text: "Comment saved!", icon: "success" });
    } catch (error) {
      debugger;
      swal({ title: "Error", text: "An error occured", icon: "error" });
    }
  };
  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <Menu />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Comments</h2>
      <form onSubmit={handleSubmit}>
        <Container style={{ width: "50%", textAlign: "center" }}>
          <FormControl fullWidth required style={{ marginBottom: "20px" }}>
            <InputLabel>Post</InputLabel>
            <Select
              value={postId}
              label="Post"
              onChange={(e) => setPostId(e.target.value)}
            >
              {posts.length > 0 &&
                posts.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginBottom: "20px" }}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              label="Name"
            ></TextField>
          </FormControl>
          <FormControl required fullWidth style={{ marginBottom: "20px" }}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              label="Email"
            ></TextField>
          </FormControl>
          <FormControl required fullWidth style={{ marginBottom: "20px" }}>
            <TextField
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              label="Body"
              multiline
              rows={3}
            ></TextField>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "10px", width: "150px" }}
          >
            Save
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default Comment;
