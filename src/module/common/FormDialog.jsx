import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const FormDialog = ({
  item,
  type,
  width = "md",
  onCancel,
  mutation,
  children,
}) => {
  return (
    <Dialog fullWidth={true} maxWidth={width} open={Boolean(item)}>
      <DialogTitle fontWeight={"bold"} paddingBottom={0}>
        {item?.id ? `Update ${type} ${item?.id}` : `Create new ${type}`}
      </DialogTitle>
      <form onSubmit={mutation.mutate}>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Box display={"flex"} gap={2} paddingRight={2} paddingBottom={2}>
            <Button variant={"contained"} onClick={onCancel}>
              Cancel
            </Button>
            <Button variant={"contained"} color={"primary"} type={"submit"}>
              Save
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};

FormDialog.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string,
  width: PropTypes.string,
  onCancel: PropTypes.func,
  mutation: PropTypes.any,
  children: PropTypes.node,
};

export default FormDialog;
