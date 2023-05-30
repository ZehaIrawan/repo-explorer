import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Repos from "./Repos";
import { IReduxUser } from "../redux/user/user.d";

interface UserAccordionProps {
  user: IReduxUser;
}

function UserAccordion({ user }: UserAccordionProps) {
  return (
    <Accordion>
      <AccordionSummary
        tabIndex={0}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "#F2F2F2" }}
      >
        <Typography variant="body1">{user.login}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Repos username={user.login} />
      </AccordionDetails>
    </Accordion>
  );
}

export default UserAccordion;
