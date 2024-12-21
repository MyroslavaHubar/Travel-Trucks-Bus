import Avatar from "@mui/material/Avatar";

const AvatarReviews = ({ reviewerName }) => {
  return (
    <Avatar
      sx={{
        bgcolor: "#f2f4f7",
        color: "#e44848",
        width: 60,
        height: 60,
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: 1.33,
      }}
    >
      {reviewerName.charAt(0)}
    </Avatar>
  );
};

export default AvatarReviews;
