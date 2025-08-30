//GameBoard

export type GameBoardProps = {
  gameRunning: boolean;
  incrementScore: () => void;
};

//ControlPanel

export type ControlPanelProps = {
  start: () => void;
  reset: () => void;
};


//Mole

export type MoleProps = {
  onClick: () => void;
};

//ScoreBoard

export type ScoreBoardProps = {
  score: number;
};

//Timer

export type TimerProps = {
  timeLeft: number;
};

//HoleType 

export type HoleTypeProps = {
  value: string | null;
};

//Footer

export type FooterProps = {
  developer?: string;
  version?: string;
};