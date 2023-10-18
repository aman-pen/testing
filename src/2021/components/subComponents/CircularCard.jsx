import { Typography, Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../../style/circularCard.scss";
const CircularCard = ({ Name, LinkedIn, Picture, theme }) => {
  return (
    <>
      <Box
        className="d-flex flex-column justify-content-center align-items-center"
        sx={{
          paddingBottom: {
            xs: "4rem",
            mmb: "0rem",
          },
        }}
      >
        <img className="organizer-image" alt={`${Name}'s`} src={Picture} loading="lazy"/>
        <Box
          className="organizer-name"
          sx={{
            paddingTop: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: theme.fontSize.secondaryText,
              },
              color: theme.colors.text.bodyGrey,
            }}
          >
            {Name}
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: "1.5rem",
          }}
          className="organizer-linkedin"
        >
          <a href={LinkedIn} target="_blank" rel="noreferrer">
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon
                color="primary"
                sx={{
                  fontSize: "4rem",
                }}
              />
            </IconButton>
          </a>
        </Box>
      </Box>
    </>
  );
};
export default CircularCard;
