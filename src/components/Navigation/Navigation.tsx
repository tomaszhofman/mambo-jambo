import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routing";
import { Box, Typography, useMediaQuery } from "@mui/material";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={routes.About}>About</Link>
        <Link to={routes.Contact}>Form</Link>
        <Link to={routes.LandingPage}>Policy</Link>
      </Menu>
    </div>
  );
}

const Navigation = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: "10px",
      }}
    >
      {matches ? (
        <>
          <Link to={"/"}>
            <Typography>Home</Typography>
          </Link>
          <Link to={routes.About}>About</Link>
          <Link to={routes.Contact}>Form</Link>
          <Link to={routes.LandingPage}>Policy</Link>
          <Link to={routes.Showcase}>Showacase</Link>
        </>
      ) : (
        <BasicMenu />
      )}
    </Box>
  );
};

export default Navigation;
