import { ListItemText, TextField } from "@mui/material";
import { useState } from "react";

export default function EditableListItemText({ primary, onEdited }) {
  const [edited, setEdited] = useState(false);
  const [value, setValue] = useState(primary);

  const handleOnFinished = () => {
    setEdited(false);
    if (primary != value) onEdited(value);
  };

  if (edited)
    return (
      <TextField
        autoFocus
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleOnFinished}
        fullWidth
      />
    );
  return <ListItemText primary={primary} onClick={() => setEdited(true)} />;
}
