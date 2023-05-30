import { Box, Typography, styled, CircularProgress } from "@mui/material";
import { useGetReposByUsernameQuery } from "../redux/repo/repo.query";
import StarIcon from "@mui/icons-material/Star";
import { IReduxRepoData } from "../redux/repo/repo.d";

interface ReposProps {
  username: string;
}

const RepoBox = styled(Box)({
  border: "1px solid lightgrey",
  backgroundColor: "#E0E0E0",
  padding: "6px",
  margin: "12px 0 0 12px",
});

const RepoDetailsBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const LoaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const Repos = (props: ReposProps) => {
  const { data: repos, isLoading } = useGetReposByUsernameQuery({
    username: props.username,
  });

  if (isLoading) {
    return (
      <LoaderContainer>
        <CircularProgress size={32} />
      </LoaderContainer>
    );
  }

  return (
    <>
      {repos?.map((repo: IReduxRepoData) => {
        return (
          <RepoBox key={repo.id}>
            <RepoDetailsBox>
              <Typography variant="h5">{repo.name}</Typography>
              {repo.stargazers_count > 0 && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h5">{repo.stargazers_count}</Typography>
                  <StarIcon />
                </div>
              )}
            </RepoDetailsBox>
            <Typography variant="caption">{repo.description}</Typography>
          </RepoBox>
        );
      })}
    </>
  );
};

export default Repos;
