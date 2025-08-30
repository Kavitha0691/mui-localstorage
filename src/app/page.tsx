'use client'
import { useEffect, useState } from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import Header from "@/component/Header";
import GameBoard from "@/component/GameBoard";
import ScoreBoard from "@/component/ScoreBoard";
import Timer from "@/component/Timer";
import ControlPanel from "@/component/ControlPanel";
import Footer from "@/component/Footer";

export default function Home() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameRunning, setGameRunning] = useState(false);

  useEffect(() => {
    if (!gameRunning) return;
    if (timeLeft <= 0) {
      setGameRunning(false);

      if (typeof window !== "undefined") {
        const existingScores = JSON.parse(localStorage.getItem("scores") || "[]");
        existingScores.push(score);
        localStorage.setItem("scores", JSON.stringify(existingScores));
      }

      return;
    }

    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [gameRunning, timeLeft]);

  const handleReset = () => {
    if (typeof window !== "undefined") {
      const existingScores = JSON.parse(localStorage.getItem("scores") || "[]");
      existingScores.push(score);
      localStorage.setItem("scores", JSON.stringify(existingScores));
    }
    setScore(0);
    setTimeLeft(30);
    setGameRunning(false);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <CssBaseline />
        <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column" }}>

          <Header />

          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 4 }}>
            <ScoreBoard score={score} />
            <Timer timeLeft={timeLeft} />
          </Box>

          <Box component="main" sx={{ flexGrow: 1, mt: 4 }}>
            <GameBoard
              gameRunning={gameRunning}
              incrementScore={() => setScore(prev => prev + 1)}
            />

            <ControlPanel
              start={() => {
                setScore(0);
                setTimeLeft(30);
                setGameRunning(true);
              }}
              reset={handleReset}
            />
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}