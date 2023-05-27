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

function App() {
  const [usernameQuery, setUsernameQuery] = useState<string>("");

  const [users, setUsers] = useState<{ username: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameQuery(e.target.value);
    setUsers([]);
  };

  const handleClick = () => {
    setUsers([{ username: "Zeha" }, { username: "Raj" }]);
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

      {usernameQuery && users.length > 0 && (
        <>
          <Typography variant="body1">{`Showing users for "${usernameQuery}"`}</Typography>
          {users.map((user) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="body1">{user.username}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
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
