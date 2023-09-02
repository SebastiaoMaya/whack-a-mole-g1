import { Flex } from "@chakra-ui/react";
import { Mole } from "./Mole";
import { ROWS } from "./constants";
import { v4 as uuidv4 } from "uuid";

export const Column = () => {
  return (
    <Flex direction="column" gap="10px" draggable={false} userSelect="none">
      {[...Array(ROWS)].map(() => (
        <Mole key={`mole_${uuidv4()}`} />
      ))}
    </Flex>
  );
};
