import {
  Box,
  TextField,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetUsersByUsernameQuery } from "./redux/user.query";

import Repos from "./components/Repos";

function App() {
  const [usernameQuery, setUsernameQuery] = useState<string>("");
  const [usernameKeyword, setUsernameKeyword] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameQuery(e.target.value);
  };

  const { data: users } = useGetUsersByUsernameQuery(
    {
      params: {
        q: usernameKeyword,
        limit: 3,
      },
    },
    { skip: !usernameKeyword },
  );

  const handleClick = () => {
    setUsernameKeyword(usernameQuery);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        gap: "16px",
      }}
    >
      <TextField
        value={usernameQuery}
        onChange={handleChange}
        placeholder="Enter Username"
      />
      <Button onClick={handleClick} variant="contained">
        Search
      </Button>

      {usernameKeyword && users?.length > 0 && (
        <>
          <Typography variant="body1">{`Showing users for "${usernameKeyword}"`}</Typography>
          {users.map((user: any) => {
            return (
              <Accordion key={user.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="body1">{user.login}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Repos username={user.login} />
                </AccordionDetails>
              </Accordion>
            );
          })}
        </>
      )}
    </Box>
  );
}

export default App;
