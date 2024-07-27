// pages/signin.js
import React from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";

export default function SignIn() {
  return (
    <Container maxWidth="md" style={styles.container}>
      <Box style={styles.box}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb={3}
        >
          <img src="/logo.png" alt="Logo" style={styles.logo} />
        </Box>
        <Typography variant="h4" style={styles.header}>
          Sign in
        </Typography>
        <Typography variant="body1" style={styles.subHeader}>
          Use your EduFusion Account
        </Typography>
        <TextField
          label="Enter your Username"
          variant="outlined"
          fullWidth
          margin="normal"
          style={styles.textField}
        />
        <Link
          href="#"
          variant="body2"
          style={{
            display: "block",
            textAlign: "right",
            marginBottom: "1rem",
            color: "#6c757d",
          }}
        >
          Forgot Username?
        </Link>
        <Box mt={2}>
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#2656c9",
              color: "white",
              textTransform: "none",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

const styles = {
  container: {
    backgroundColor: "#e0e7ff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
  logo: {
    height: "50px",
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
