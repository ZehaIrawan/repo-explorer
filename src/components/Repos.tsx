import { Box, Typography } from "@mui/material";
import { useGetReposByUsernameQuery } from "../redux/repo.query";

interface ReposProps {
  username: string;
}

const Repos = (props: ReposProps) => {
  console.log(props, "props");

  const { data: repos, isLoading } = useGetReposByUsernameQuery({
    username: props.username,
  });

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <>
      {repos.map((repo: any) => {
        return (
          <Box key={repo.id} sx={{ border: "1px solid lightgrey" }}>
            <Typography variant="h6">{repo.name}</Typography>
            <Typography variant="caption">{repo.description}</Typography>
            <Typography variant="caption">{repo.stargazers_count}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default Repos;
