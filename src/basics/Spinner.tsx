import { Box, CircularProgress, Typography } from "@mui/material";

type SpinnerProps = {
  text: string;
};

export default function Spinner(props: SpinnerProps) {
  const { text } = props;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <CircularProgress />
      <Typography sx={{ paddingTop: "4px" }} variant="h5">
        {text}
      </Typography>
    </Box>
  );
}
