import { ScoreBoardProps } from "@/utils/types";
import { Typography } from "@mui/material";

const ScoreBoard = ({ score }: ScoreBoardProps) => {
  return (
    <Typography
      data-testid="score"
      variant="h5"
      component="h2"
      sx={{ fontWeight: "bold" }}
    >
      Score: {score}
    </Typography>
  );
};

export default ScoreBoard;
