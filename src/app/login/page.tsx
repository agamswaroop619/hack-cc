"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import toast, { Toaster } from "react-hot-toast";
import "./SignIn.css"; // Import the CSS file for animations

const steps = ["Username", "Password"];

export default function Login() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});

  const validateStep = () => {
    let newErrors: any = {};
    if (step === 0 && !formData.username)
      newErrors.username = "Username is required";
    if (step === 1 && !formData.password)
      newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateStep()) setStep((prevStep) => prevStep + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      try {
        const response = await axios.post(
          "https://7e06fa9a-a9ed-469c-851e-094b33332263-00-30aaaf9celq3y.sisko.replit.dev/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success("Login successful!");
        console.log(response.data);
      } catch (error) {
        toast.error("Login failed. Please try again.");
        console.error(error);
      }
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <Box sx={styles.stepBox}>
            <TextField
              label="Enter your Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              sx={styles.textField}
            />
            <Box mt={2} sx={styles.buttonContainer}>
              <Button
                variant="contained"
                sx={styles.button}
                onClick={handleNextClick}
              >
                Next
              </Button>
            </Box>
          </Box>
        );
      case 1:
        return (
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
              error={!!errors.password}
              helperText={errors.password}
              sx={styles.textField}
            />
            <Box mt={2} sx={styles.buttonContainer}>
              <Button
                variant="contained"
                sx={styles.button}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <Toaster />
      <Box sx={styles.box}>
        <Box sx={styles.leftSide}>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
          <Typography variant="h4" sx={styles.header}>
            Log in
          </Typography>
          <Typography variant="body1" sx={styles.subHeader}>
            Use your EduFusion Account
          </Typography>
        </Box>
        <Box sx={styles.rightSideContainer}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={styles.innerBox}>
            <TransitionGroup>
              <CSSTransition key={step} classNames="fade" timeout={300}>
                {renderStepContent()}
              </CSSTransition>
            </TransitionGroup>
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
    paddingTop: "2rem",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "80%",
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
    flexDirection: "column",
  },
  innerBox: {
    width: "100%",
  },
  stepBox: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
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
  button: {
    backgroundColor: "#2656c9",
    color: "white",
    textTransform: "none",
  },
};
