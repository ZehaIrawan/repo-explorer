import { Box, Typography } from "@mui/material";
import { useGetReposByUsernameQuery } from "../redux/repo.query";
import StarIcon from "@mui/icons-material/Star";

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6">{repo.name}</Typography>
              <div style={{ display: "flex" }}>
                <Typography variant="h6">{repo.stargazers_count}</Typography>
                <StarIcon />
              </div>
            </Box>
            <Typography variant="caption">{repo.description}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default Repos;
