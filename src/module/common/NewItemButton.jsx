import {Button} from "@mui/material";
import PropTypes from "prop-types";
import {Add} from "@mui/icons-material";

const NewItemButton = ({onClick, primary = 'New'}) => {
    return (
        <Button onClick={onClick} sx={{minWidth: 170, textTransform: 'none'}} startIcon={<Add/>} variant={'contained'}>{primary}</Button>
    )
}

NewItemButton.propTypes = {
    onClick: PropTypes.func,
    primary: PropTypes.string
}

export default NewItemButton;