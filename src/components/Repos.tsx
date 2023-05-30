import { Box, Typography } from "@mui/material";
import { useGetReposByUsernameQuery } from "../redux/repo/repo.query";
import StarIcon from "@mui/icons-material/Star";
import { IReduxRepoData } from "../redux/repo/repo.d";

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
      {repos?.map((repo: IReduxRepoData) => {
        return (
          <Box
            key={repo.id}
            sx={{
              border: "1px solid lightgrey",
              backgroundColor: "#E0E0E0",
              padding: "6px",
              margin: "12px 0 0 12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5">{repo.name}</Typography>
              <div style={{ display: "flex" }}>
                <Typography variant="h5">{repo.stargazers_count}</Typography>
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
