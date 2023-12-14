import {TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

const BacklogItem = ({card}) => {
  return (
      <TableRow>
          <TableCell width={100}>
              PROJ-1
          </TableCell>
          <TableCell>
              {card.summary}
          </TableCell>
          <TableCell width={150}>
              {card.status?.name}
          </TableCell>
          <TableCell width={100}>
              {card.storyPoint}
          </TableCell >
          <TableCell width={200}>Assigned</TableCell>
      </TableRow>
  )
}

BacklogItem.propTypes = {
    card: PropTypes.object
}

export default BacklogItem;