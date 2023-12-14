import { TableCell, TextField } from "@mui/material";
import { useState } from "react";


const EditableCell = ({intialValue, onFinished, width, type}) => {
    const [isEdited, setIsEdited] = useState(false);
    const [currentValue, setCurrentValue] = useState(intialValue);

    function handleOnFinished() {
        setIsEdited(false);
        if(intialValue != currentValue) 
            onFinished(currentValue)
    }

    return (
        <TableCell width={width} onClick={() => setIsEdited(true)}>
            {
                isEdited
                ? <TextField
                    autoFocus
                    size="small"
                    fullWidth
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    onBlur={handleOnFinished}
                    type={type}
                  />
                : currentValue
            }
          </TableCell>   
    )
}

export default EditableCell;