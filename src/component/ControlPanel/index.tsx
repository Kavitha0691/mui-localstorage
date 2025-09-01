import { ControlPanelProps } from "@/utils/types";
import { Box, Button } from "@mui/material";

const ControlPanel = ({ start, reset }: ControlPanelProps) => {
  return (
    <Box
      data-testid="controlpanel"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        m: 4,
      }}
    >
      <Button
        variant="contained"
        color="success"
        onClick={start}
        data-testid="start-btn"
        sx={{ width: 120, borderRadius: 2 }}
      >
        Start
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={reset}
        data-testid="reset-btn"
        sx={{ width: 120, borderRadius: 2 }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default ControlPanel;
