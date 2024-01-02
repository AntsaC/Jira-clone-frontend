import { Typography } from "@mui/material";

const Title = ({ title }) => {
  return (
    <Typography variant="h1" marginTop={1}>
      {title}
    </Typography>
  );
};

export default Title;
