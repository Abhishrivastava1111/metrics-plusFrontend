import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  height: "250px",
}));
const Title = styled(Typography)({
  color: "#333",
  marginBottom: "8px",
});
const DateSection = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
});
const Description = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
});
const CardContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  "& > *": {
    flex: "0 0 calc(33.333% - 20px)",
  },
});

const ProjectComponent = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const fetchProjects = () => {
    // Simulating API fetch, replace with actual API call
    const fetchedProjects = [
      {
        id: 1,
        name: "Project 1",
        startDate: "2023-01-01",
        endDate: "2023-02-28",
        description:
          "Description for Project 1 is quite long and needs to be truncated to fit within the card. This text is an example of a long description that will be shortened with ellipses.8888888888888888888888888888888888888888888888888888",
      },
      {
        id: 2,
        name: "Project 2",
        startDate: "2023-03-15",
        endDate: "2023-05-20",
        description: "Short description for Project 2.",
      },
      // Add more projects from database
    ];
    setProjects(fetchedProjects);
  };
  useEffect(() => {
    fetchProjects(); // Fetch projects initially
    // Cleanup interval on component unmount
    return () => {};
  }, []);

  const navigateTo = (id) => {
    navigate("/projectDetails");
  };

  return (
    <CardContainer>
      {projects.map((project) => (
        <CustomCard
          key={project.id}
          variant="outlined"
          onClick={() => navigateTo(project.id)}
        >
          <CardContent>
            <Title variant="h5" gutterBottom>
              {project.name}
            </Title>
            <DateSection>
              <Typography color="textSecondary">
                <strong>Start Date:</strong>{" "}
                {new Date(project.startDate).toLocaleDateString()}
              </Typography>
              <Typography color="textSecondary">
                <strong>End Date:</strong>{" "}
                {new Date(project.endDate).toLocaleDateString()}
              </Typography>
            </DateSection>
            <Description variant="body2" component="p">
              {project.description}
            </Description>
          </CardContent>
        </CustomCard>
      ))}
    </CardContainer>
  );
};
export default ProjectComponent;
