import { Stack, Typography, Paper, Rating } from "@mui/material";
import user from "../../assets/images/user.png";
import { forwardRef } from "react";

const Feedback = forwardRef((props, ref) => {
  return (
    <Stack
      ref={ref}
      sx={{
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          width: 0,
        },
        my: 3,
      }}
      spacing={2}
      direction="row"
    >
      {Array.from(Array(6)).map((_) => (
        <Paper variant="outlined" sx={{ maxWidth: 400, minWidth: 350, p: 2 }}>
          <Stack spacing={2}>
            <Stack justifyContent="space-between" direction="row">
              <Stack spacing={1}>
                <img src={user} alt="user" />
                <Typography>
                  <strong>Sahil Khan</strong>
                </Typography>
              </Stack>
              <Rating name="read-only" value={4} readOnly />
            </Stack>
            <Typography>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint.
            </Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
});

export default Feedback;
