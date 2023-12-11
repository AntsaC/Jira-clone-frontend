import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import PropTypes from "prop-types";

const ActionBar = ({onEdit, onDelete}) => {
  return (
      <Box width={'100%'} display={'flex'} justifyContent={'flex-end'} gap={2}>
          <IconButton onClick={onEdit}>
              <Edit />
          </IconButton>
          <IconButton onClick={onDelete}>
              <Delete />
          </IconButton>
      </Box>
  )
}

ActionBar.propTypes = {
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
}

export default ActionBar;