import { Box, Typography, styled, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useGetUsersByUsernameQuery } from "./redux/user/user.query";
import UserAccordion from "./components/UserAccordion";
import SearchBar from "./components/Searchbar";
import { IReduxUser } from "./redux/user/user.d";

const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "400px",
  gap: "16px",
});

const Loader = styled(CircularProgress)({
  margin: "0 auto",
});

function App() {
  const [usernameKeyword, setUsernameKeyword] = useState("");

  const { data: users, isLoading } = useGetUsersByUsernameQuery(
    {
      params: {
        q: usernameKeyword,
        per_page: 5,
      },
    },
    { skip: !usernameKeyword },
  );

  const handleSubmit = (keyword: string) => {
    setUsernameKeyword(keyword);
  };

  return (
    <RootBox>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}

      {usernameKeyword && users?.length > 0 && (
        <>
          <Typography variant="body1">{`Showing users for "${usernameKeyword}"`}</Typography>
          {users.map((user: IReduxUser) => (
            <UserAccordion key={user.id} user={user} />
          ))}
        </>
      )}
    </RootBox>
  );
}

export default App;
