import React from "react";
import { Text, Flex } from "@chakra-ui/react";

interface Props {
  name: string;
  score: number;
  position: number;
}

export const LeaderboardPlayer: React.FC<Props> = ({
  name,
  score,
  position,
}) => (
  <Flex
    gap="20px"
    justifyContent="space-between"
    fontSize="lg"
    fontWeight="bold"
  >
    <Flex gap="20px">
      <Text minWidth="20px">{position}</Text>
      <Text>{name}</Text>
    </Flex>
    <Text>{score}</Text>
  </Flex>
);
