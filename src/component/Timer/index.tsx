import { TimerProps } from "@/utils/types";
import { Typography } from "@mui/material";

const Timer = ({ timeLeft }: TimerProps) => {
  return (
    <Typography
      data-testid="timer"
      variant="h6"
      component="h2"
      fontWeight="bold"
    >
      Time: {timeLeft}s
    </Typography>
  );
};

export default Timer;
