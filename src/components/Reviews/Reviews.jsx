import { useSelector } from "react-redux";
import { selectTruckById } from "../../redux/allTrucks/selectors";
import { Container, Stack } from "@mui/material";
import css from "./Reviews.module.css";
import HalfRating from "../HalfRating/HalfRating";
import AvatarReviews from "../AvatarReviews/AvatarReviews";

const Reviews = () => {
  const truckById = useSelector(selectTruckById);
  if (!truckById.reviews || truckById.reviews.length === 0) {
    return <p>No reviews available!</p>;
  }

  return (
    <>
      <Container className={css.reviewsContainer}>
        <Stack spacing={2}>
          {truckById.reviews.map((review, index) => (
            <div key={index} className={css.reviewsContent}>
              <div className={css.reviewsAvatar}>
                <AvatarReviews reviewerName={review.reviewer_name} />

                <div className={css.reviewsDetails}>
                  <p className={css.reviewerName}>{review.reviewer_name}</p>
                  <HalfRating reviewerRating={review.reviewer_rating} />
                </div>
              </div>
              <p className={css.reviewsComment}>{review.comment}</p>
            </div>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Reviews;
