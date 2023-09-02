import { Flex, Box } from "@chakra-ui/react";
import { Column } from "./Column";
import { COLUMNS } from "./constants";
import { v4 as uuidv4 } from "uuid";
import { GameInfo } from "./GameInfo";
import { useSelector } from "react-redux";
import { getIsFinished } from "store/selectors";
import { Leaderboard } from "./Leaderboard";

export const Board = () => {
  const isGameFinished = useSelector(getIsFinished);
  return (
    <Box userSelect="none">
      <Flex
        backgroundImage="url('/WAM_bg.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="100vh"
        padding="20px"
        sx={{
          cursor: "url('/WAM_Hammer_scaled.png'), auto",
        }}
        direction="column"
      >
        <GameInfo />
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="20px"
          width="100%"
          height="100%"
        >
          {[...Array(COLUMNS)].map(() => (
            <Column key={`column_${uuidv4()}`} />
          ))}
        </Flex>
      </Flex>
      {isGameFinished && <Leaderboard />}
    </Box>
  );
};
