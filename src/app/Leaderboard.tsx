import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getLeaderboard, getScore } from "../store/selectors";
import { LeaderboardPlayer } from "./LeaderboardPlayer";
import { useMemo } from "react";

export const Leaderboard = () => {
  const leaderboard = useSelector(getLeaderboard);
  const currentScore = useSelector(getScore);
  const top10 = useMemo(() => leaderboard.slice(0, 10), [leaderboard]);

  //const currentPlayerLeaderBoardPosition = useMemo(()=>, [currentScore, top10])

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      zIndex="1"
      opacity="0.7"
      background="black"
      position="absolute"
      top="0"
      width="100%"
      padding="3rem"
    >
      <Flex direction="column" color="white" alignItems="space-between">
        <Text fontSize="3xl" pb="4">
          Top 10 Players
        </Text>
        {top10 &&
          top10.map(({ id, ...rest }, idx) => (
            <LeaderboardPlayer
              key={`leaderboard_player_${id}`}
              position={idx + 1}
              {...rest}
            />
          ))}
      </Flex>
    </Flex>
  );
};
