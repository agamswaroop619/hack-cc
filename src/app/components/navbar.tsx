"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import { Home, School, Event, Settings } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { styled } from "@mui/system";
import Image from "next/image"; // Assuming you are using Next.js Image component

const NavbarButton = styled(Button)({
  position: "relative",
  margin: "0 15px",
  fontFamily: "DM Sans, sans-serif",
  fontSize: "16px",
  color: "#000",
  textTransform: "none",
  "&:hover::after": {
    width: "100%",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    left: "0",
    bottom: "-2px",
    backgroundColor: "#4759FF",
    transition: "width 0.3s ease-in-out",
  },
});

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar style={{ justifyContent: "center" }}>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <NavbarButton onClick={() => handleNavigation("/")}>
            <Home style={{ marginRight: "8px" }} /> Home
          </NavbarButton>
          <NavbarButton onClick={() => handleNavigation("/courses")}>
            <School style={{ marginRight: "8px" }} /> Courses
          </NavbarButton>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src="/mnt/data/image.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Box>
          <NavbarButton onClick={() => handleNavigation("/attendance")}>
            <Event style={{ marginRight: "8px" }} /> Attendance
          </NavbarButton>
          <NavbarButton onClick={() => handleNavigation("/settings")}>
            <Settings style={{ marginRight: "8px" }} /> Settings
          </NavbarButton>
        </Box>
        <Box>
          <IconButton>
            <Avatar style={{ backgroundColor: "#ccc" }}>AS</Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
