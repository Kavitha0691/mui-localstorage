import { MoleProps } from "@/utils/types";
import { Button } from "@mui/material";

const Mole = ({ onClick }: MoleProps) => {
  return (
    <Button
      data-testid="mole"
      onClick={onClick}
      variant="contained"
      sx={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        bgcolor: "brown",
        minWidth: 0,
        padding: 0,
      }}
    />
  );
};

export default Mole;
