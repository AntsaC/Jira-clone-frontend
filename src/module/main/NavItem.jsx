import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import PropTypes from "prop-types";

export default function NavItem({ primary, path, icon }) {
  return (
    <ListItem key={primary} disablePadding>
      <NavLink style={{ width: "100%" }} to={path}>
        {({ isActive }) => (
          <ListItemButton
            selected={isActive}
            sx={{
              "&.Mui-selected": {
                borderLeft: "4px solid",
              },
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
          </ListItemButton>
        )}
      </NavLink>
    </ListItem>
  );
}

NavItem.propTypes = {
  primary: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.any,
};
