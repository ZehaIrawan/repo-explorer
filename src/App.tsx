import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

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
            return <Typography variant="body1">{user.username}</Typography>;
          })}
        </>
      )}
    </Box>
  );
}

export default App;
