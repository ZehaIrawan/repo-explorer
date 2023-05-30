import { Box, TextField, Button, styled } from "@mui/material";
import { useState } from "react";

interface SearchBarProps {
  onSubmit: (keyword: string) => void;
}

const SearchContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

function SearchBar({ onSubmit }: SearchBarProps) {
  const [usernameQuery, setUsernameQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(usernameQuery);
    }
    if (e.key === "Escape") {
      setUsernameQuery("");
      onSubmit("");
    }
  };

  const handleClick = () => {
    onSubmit(usernameQuery);
  };

  return (
    <SearchContainer>
      <TextField
        onKeyDown={handleKeyDown}
        value={usernameQuery}
        onChange={handleChange}
        placeholder="Enter Username"
      />
      <Button onClick={handleClick} variant="contained">
        Search
      </Button>
    </SearchContainer>
  );
}

export default SearchBar;
