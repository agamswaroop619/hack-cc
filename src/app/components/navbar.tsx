// components/Navbar.tsx
"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Home, School, Event, Settings } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { styled } from "@mui/system";

const NavbarButton = styled(Button)({
  position: "relative",
  margin: "0 10px",
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
    backgroundColor: "#FFED47",
    transition: "width 0.3s ease-in-out",
  },
});

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <NavbarButton onClick={() => handleNavigation("/")}>
            <Home /> Home
          </NavbarButton>
          <NavbarButton onClick={() => handleNavigation("/courses")}>
            <School /> Courses
          </NavbarButton>
          <NavbarButton onClick={() => handleNavigation("/attendance")}>
            <Event /> Attendance
          </NavbarButton>
          <NavbarButton onClick={() => handleNavigation("/settings")}>
            <Settings /> Settings
          </NavbarButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
