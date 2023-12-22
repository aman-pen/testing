import organizersData from "../store/dec2023/organizers.json";
import { Box, Typography } from "@mui/material";
import "../style/organizers.scss";
import "../style/global.scss";
import CircularCard from "./subComponents/CircularCard";

const Organizers = ({ theme }) => {
  return (
    <>
      <div className="organizers">
        <Box
          className="sectionMaxWidth"
          sx={{
            paddingBottom: "5rem",
          }}
        >
          <Box className="organizerHeadingBox">
            <Typography
              className="text-uppercase text-center organizerHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Event Team
            </Typography>
          </Box>
          <Box className="organizerSubHeadingBox">
            <Typography
              className="text-center organizerSubHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.sponsorTags },
              }}
            >
              Organizers
            </Typography>
          </Box>
          <Box className="mt-5" sx={{ paddingTop: "1.5rem" }} />
          <Box className="d-flex justify-content-around flex-wrap align-items-center organizersCard">
            {organizersData
              .filter(
                (org) =>
                  org.isVolunteer === "false" && org.isCoOrganizer === "false"
              )
              .map((data, index) => {
                return (
                  <CircularCard
                    key={index}
                    Name={data.OrganizerName}
                    LinkedIn={data.speakerLinkedIn}
                    Picture={data.OrganizerImage}
                    theme={theme}
                  />
                );
              })}
          </Box>
          {/* <Box className="organizerSubHeadingBox">
            <Typography
              className="text-center organizerSubHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.sponsorTags },
              }}
            >
              Co-Organizers
            </Typography>
          </Box>
          <Box className="mt-5" sx={{ paddingTop: "1.5rem" }} />
          <Box className="d-flex justify-content-evenly flex-wrap align-items-center organizersCard">
            {organizersData
              .filter((org) => org.isCoOrganizer === "true")
              .map((data, index) => {
                return (
                  <CircularCard
                    key={index}
                    Name={data.OrganizerName}
                    LinkedIn={data.speakerLinkedIn}
                    Picture={data.OrganizerImage}
                    theme={theme}
                  />
                );
              })}
          </Box> */}
          <Box className="organizerSubHeadingBox">
            <Typography
              className="text-center organizerSubHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.sponsorTags },
              }}
            >
              Volunteers
            </Typography>
          </Box>
          <Box className="mt-5" sx={{ paddingTop: "1.5rem" }} />
          <Box className="d-flex justify-content-evenly flex-wrap align-items-center organizersCard">
            {organizersData
              .filter((org) => org.isVolunteer === "true")
              .map((data, index) => {
                return (
                  <CircularCard
                    key={index}
                    Name={data.OrganizerName}
                    LinkedIn={data.speakerLinkedIn}
                    Picture={data.OrganizerImage}
                    theme={theme}
                  />
                );
              })}
          </Box>
        </Box>
      </div>
    </>
  );
};
export default Organizers;
