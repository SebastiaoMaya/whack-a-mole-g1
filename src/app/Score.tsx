import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getScore } from "../store/selectors";

export const Score = () => {
  const score = useSelector(getScore);
  return (
    <Flex direction="column">
      <Text
        fontSize={"3xl"}
        color="red"
        sx={{ "-webkit-text-stroke": "0.5px white" }}
        fontWeight="extrabold"
        lineHeight="1"
      >
        Score
      </Text>
      <Text
        fontSize={"2xl"}
        sx={{ "-webkit-text-stroke": "0.5px white" }}
        fontWeight="extrabold"
        lineHeight="1"
      >
        {score}
      </Text>
    </Flex>
  );
};
