import { Flex } from "@chakra-ui/react";
import { Score } from "./Score";
import { Countdown } from "./Countdown";
import { StartGameBtn } from "./StartGameBtn";

export const GameInfo = () => (
  <Flex justifyContent="space-between">
    <Score />
    <Countdown />
    <StartGameBtn />
  </Flex>
);
