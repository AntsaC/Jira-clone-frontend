import { ExpandMore } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function BasicMenu({ id, primary, items }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id={`basic-button-${id}`}
        aria-controls={open ? `basic-menu-${id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMore />}
      >
        {primary}
      </Button>
      <Menu
        id={`basic-menu-${id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `basic-button-${id}`,
        }}
      >
        {items &&
          items.map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => {
                item.onClick();
                handleClose();
              }}
            >
              {item.label}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
