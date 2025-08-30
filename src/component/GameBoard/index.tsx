'use client'
import { useEffect, useState } from "react";
import { GameBoardProps, HoleTypeProps } from "@/utils/types";
import { GameToyImages } from "@/data/Game";
import { Box } from "@mui/material";

const GameBoard = ({ gameRunning, incrementScore }: GameBoardProps) => {
  const [holesState, setHolesState] = useState<HoleTypeProps[]>(
    Array(9).fill({ value: null })
  );

  useEffect(() => {
    if (!gameRunning) {
      setHolesState(Array(9).fill({ value: null }));
      return;
    }

    const interval = setInterval(() => {
      const indexes = Array.from({ length: 9 }, (_, i) => i);
      const shuffled = indexes.sort(() => 0.5 - Math.random());
      const activeIndexes = shuffled.slice(0, 3);

      const newHoles: HoleTypeProps[] = holesState.map((_, idx) =>
        activeIndexes.includes(idx)
          ? { value: GameToyImages[Math.floor(Math.random() * GameToyImages.length)] }
          : { value: null }
      );

      setHolesState(newHoles);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameRunning]);

  const handleClick = (idx: number) => {
    if (!holesState[idx].value) return;
    incrementScore();

    const newHoles = [...holesState];
    newHoles[idx] = { value: GameToyImages[Math.floor(Math.random() * GameToyImages.length)] };
    setHolesState(newHoles);
  };

  return (
    <Box
      data-testid="gameboard"
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(3, 80px)",
        sm: "repeat(3, 200px)",
        md: "repeat(3, 200px)"
      }}
      gap={3}
      maxWidth={600}
      my={2}
      mx="auto"
    >
      {holesState.map((hole, idx) => (
        <Box
          key={idx}
          data-testid="hole"
          width={80}
          height={80}
          borderRadius={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml={6}
          bgcolor="grey.300"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(idx)}
        >
          {hole.value && (
            <Box
              component="img"
              src={hole.value}
              alt="mole"
              data-testid="mole"
              width="100%"
              height="100%"
              sx={{ objectFit: "cover", borderRadius: 4 }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default GameBoard;