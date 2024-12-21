import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const HalfRating = ({ reviewerRating }) => {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        value={reviewerRating}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
};

export default HalfRating;
