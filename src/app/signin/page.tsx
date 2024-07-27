"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";
import axios from "axios";
import { width } from "@mui/system";

export default function SignIn() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
    email: "",
  });

  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://7e06fa9a-a9ed-469c-851e-094b33332263-00-30aaaf9celq3y.sisko.replit.dev/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <Box sx={styles.box}>
        <Box sx={styles.leftSide}>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
          <Typography variant="h4" sx={styles.header}>
            Sign in
          </Typography>
          <Typography variant="body1" sx={styles.subHeader}>
            Use your EduFusion Account
          </Typography>
        </Box>
        <Box sx={styles.rightSideContainer}>
          <Box
            sx={{
              ...styles.innerBox,
              transform: `translateX(-${(step - 1) * 100}%)`,
            }}
          >
            <Box sx={styles.stepBox}>
              <TextField
                label="Enter your Username"
                variant="outlined"
                fullWidth
                margin="normal"
                name="username"
                value={formData.username}
                onChange={handleChange}
                sx={styles.textField}
              />
              <Link href="#" variant="body2" sx={styles.link}>
                Forgot Username?
              </Link>
              <Box mt={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Box>
            </Box>
            <Box sx={styles.stepBox}>
              <TextField
                label="Enter your Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={styles.textField}
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Box>
            </Box>
            <Box sx={styles.stepBox}>
              <TextField
                label="Enter your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={styles.textField}
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Box>
            </Box>
            <Box sx={styles.stepBox}>
              <TextField
                label="Enter your Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={styles.textField}
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#e0e7ff",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "100%",
    display: "flex",
  },
  leftSide: {
    width: "50%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rightSideContainer: {
    width: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    display: "flex",
    width: "400%",
    transition: "transform 0.5s ease-in-out",
  },
  stepBox: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: "50px",
    marginBottom: "1rem",
  },
  header: {
    marginBottom: "0.5rem",
  },
  subHeader: {
    marginBottom: "1.5rem",
    color: "#6c757d",
  },
  textField: {
    marginBottom: "1rem",
  },
  link: {
    display: "block",
    textAlign: "right",
    marginBottom: "1rem",
    color: "#6c757d",
  },
  button: {
    backgroundColor: "#2656c9",
    color: "white",
    textTransform: "none",
  },
};
