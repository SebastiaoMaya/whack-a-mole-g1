import { Flex } from "@chakra-ui/react";
import { Mole } from "./Mole";
import { ROWS } from "./constants";

export const Column = () => {
  return (
    <Flex direction="column" gap="10px">
      {[...Array(ROWS)].map(() => (
        <Mole />
      ))}
    </Flex>
  );
};
