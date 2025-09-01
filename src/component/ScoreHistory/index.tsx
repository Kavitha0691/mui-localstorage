import { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";

const ScoreHistory = () => {
    const [scores, setScores] = useState<number[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = JSON.parse(localStorage.getItem("scores") || "[]");
            setScores(saved);
        }
    }, []);

    const handleDeleteLast = () => {
        const updatedScores = scores.slice(0, -1);
        setScores(updatedScores);
        if (typeof window !== "undefined") {
            localStorage.setItem("scores", JSON.stringify(updatedScores));
        }
    };

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                mb={6}
            >
                <Typography variant="h6" fontWeight="bold">
                    Score History: {JSON.stringify(scores)}
                </Typography>

                {scores.length > 0 && (
                    <IconButton
                        onClick={handleDeleteLast}
                        sx={{
                            p: 0.5,
                        }}
                    >
                        <Box
                            component="img"
                            src="/removeIcon.png"
                            alt="remove last score"
                            sx={{ width: 26, height: 26 }}
                        />
                    </IconButton>
                )}
            </Box>

        </>
    );
};

export default ScoreHistory;
