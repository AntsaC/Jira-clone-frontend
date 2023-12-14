import { TableCell, TextField } from "@mui/material";
import { useState } from "react";


const EditableCell = ({intialValue, onFinished}) => {
    const [isEdited, setIsEdited] = useState(false);
    const [currentValue, setCurrentValue] = useState(intialValue);

    return (
        <TableCell onClick={() => setIsEdited(true)}>
            {
                isEdited
                ? <TextField
                    autoFocus
                    size="small"
                    fullWidth
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    onBlur={() => {setIsEdited(false); onFinished(currentValue) }}
                  />
                : currentValue
            }
          </TableCell>   
    )
}

export default EditableCell;