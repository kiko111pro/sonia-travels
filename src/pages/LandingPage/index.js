import { useRef } from "react";
import {
  Box,
  Stack,
  Paper,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import Card from "./Card";
import "./style.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FeedbackContainer from "./FeedbackContainer";
import Footer from "../../components/layout/Footer";

const Image = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <Stack>
      <Box
        id="landing_banner"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          minHeight: "90vh",
        }}
      >
        <Container maxWidth="xl">
          <Stack sx={{ py: 3 }} spacing={3}>
            <Stack>
              <Typography gutterBottom sx={{ color: "white" }} variant="h3">
                <strong>Hire Outstation Taxi Services in India</strong>
              </Typography>
              <Typography sx={{ color: "white" }} variant="h5">
                Affordable one-way and round trip packages{" "}
              </Typography>
            </Stack>
            <Paper
              sx={{
                maxWidth: 360,
                minHeight: 330,
                width: "80vw",
                alignSelf: { sm: "flex-end", xs: "center" },
              }}
            >
              <Card />
            </Paper>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ my: 7 }}>
        <Grid
          container
          justifyContent={"space-between"}
          gap={2}
          alignItems="center"
        >
          <Grid item container xs={12} sm={5}>
            <Stack>
              <Typography variant="h3">
                <strong>Our Customer Feedback</strong>
              </Typography>
              <Typography variant="h6" sx={{ color: "#878787" }}>
                Dont take our word from it. Trust our customers
              </Typography>
            </Stack>
          </Grid>
          <Grid
            container
            justifyContent={{ sm: "flex-end", xs: "center" }}
            item
            xs={12}
            sm={5}
          >
            <Stack spacing={2} direction="row" justifyContent="flex-end">
              <Button
                onClick={() => scroll(-100)}
                variant="outlined"
                startIcon={<KeyboardArrowLeftIcon />}
              >
                Previous
              </Button>
              <Button
                onClick={() => scroll(100)}
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Next
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <FeedbackContainer ref={ref} />
      </Container>

      <Footer />
    </Stack>
  );
};

export default Image;
