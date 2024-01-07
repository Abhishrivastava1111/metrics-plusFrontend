// ProjectDetailsPage.js
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
const ProjectDetailsPage = () => {
  const projectId = 2; // Assuming you have the project ID in the route parameters
  const [projectDetails, setProjectDetails] = useState(null);
  useEffect(() => {
    // Commenting out the Axios call since the backend is not fully completed
    // const fetchProjectDetails = async () => {
    //   try {
    //     const response = await axios.get(`/api/projects/${projectId}`);
    //     setProjectDetails(response.data);
    //   } catch (error) {
    //     console.error('Error fetching project details:', error);
    //   }
    // };
    // Sample hardcoded data to show representation
    const hardcodedData = {
      name: "Sample Project",
      startDate: "2023-01-01",
      endDate: "2023-02-28",
      description: "This is a sample project description.",
      members: [
        {
          id: 1,
          fname: "John",
          lname: "Doe",
          contact: "123-456-7890",
          status: "Active",
          deployed: true,
          email: "john.doe@example.com",
        },
        {
          id: 2,
          fname: "Jane",
          lname: "Doe",
          contact: "987-654-3210",
          status: "Inactive",
          deployed: false,
          email: "jane.doe@example.com",
        },
        {
          id: 101,
          fname: "Additional",
          lname: "Member",
          contact: "123-456-7890",
          status: "Active",
          deployed: true,
          email: "additional.member@example.com",
        },
        {
          id: 102,
          fname: "Another",
          lname: "Member",
          contact: "987-654-3210",
          status: "Inactive",
          deployed: false,
          email: "another.member@example.com",
        },
      ],
    };
    // Set the hardcoded data to the state
    setProjectDetails(hardcodedData);
    // Commenting out the actual call since we are using hardcoded data
    // fetchProjectDetails();
  }, [projectId]);
  if (!projectDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{projectDetails.name}</h1>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "800px", margin: "20px auto" }}
      >
        <Table style={{ width: "100%" }}>
          <TableBody>
            <TableRow>
              <TableCell colSpan={6}>
                <div>
                  <h3>Project Details</h3>
                  <p>
                    Start Date:{" "}
                    {new Date(projectDetails.startDate).toLocaleDateString()}
                  </p>
                  <p>
                    End Date:{" "}
                    {new Date(projectDetails.endDate).toLocaleDateString()}
                  </p>
                  <p>Description: {projectDetails.description}</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableRow>
          <TableCell colSpan={6} style={{ textAlign: "center" }}>
            <h2>Members</h2>
          </TableCell>
        </TableRow>
        {/* Table for Members */}
        <Table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "15%", fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell style={{ width: "20%", fontWeight: "bold" }}>
                First Name
              </TableCell>
              <TableCell style={{ width: "20%", fontWeight: "bold" }}>
                Last Name
              </TableCell>
              <TableCell style={{ width: "15%", fontWeight: "bold" }}>
                Contact
              </TableCell>
              <TableCell style={{ width: "15%", fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell style={{ width: "15%", fontWeight: "bold" }}>
                Deployment
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Member Details */}
            {projectDetails.members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.fname}</TableCell>
                <TableCell>{member.lname}</TableCell>
                <TableCell>{member.contact}</TableCell>
                <TableCell>{member.status}</TableCell>
                <TableCell>
                  <div
                    style={{
                      outline: member.deployed
                        ? "2px solid green"
                        : "2px solid red",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  >
                    {member.deployed ? "Deployed" : "Undeployed"}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ProjectDetailsPage;
