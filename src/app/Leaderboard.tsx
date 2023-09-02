import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getLeaderboard, getScore } from "store/selectors";
import { LeaderboardPlayer } from "./LeaderboardPlayer";
import { useMemo } from "react";
import { AddPlayerToLeaderboard } from "./AddPlayerToLeaderboard";
import { StartGameBtn } from "./StartGameBtn";

export const Leaderboard = () => {
  const leaderboard = useSelector(getLeaderboard);
  const currentScore = useSelector(getScore);
  const top10 = useMemo(() => leaderboard.slice(0, 10), [leaderboard]);
  const isPlayerInLeaderboard = useMemo(
    () => top10.some(({ score }) => score < currentScore),
    [currentScore, top10]
  );

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
        {isPlayerInLeaderboard && <AddPlayerToLeaderboard />}
        <Flex justifyContent="flex-end" mt="4">
          <StartGameBtn retry={true} />
        </Flex>
      </Flex>
    </Flex>
  );
};
