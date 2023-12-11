import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";

const ActionBar = () => {
  return (
      <Box width={'100%'} display={'flex'} justifyContent={'flex-end'} gap={2}>
          <IconButton>
              <Edit />
          </IconButton>
          <IconButton>
              <Delete />
          </IconButton>
      </Box>
  )
}

export default ActionBar;