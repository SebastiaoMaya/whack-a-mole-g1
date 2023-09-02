import { Flex } from "@chakra-ui/react";
import { Column } from "./Column";
import { COLUMNS } from "./constants";
import { Score } from "./Score";

export const Board = () => {
  return (
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
    >
      <Score />
      <Flex justifyContent="center" alignItems="center" gap="20px" width="100%">
        {[...Array(COLUMNS)].map(() => (
          <Column />
        ))}
      </Flex>
    </Flex>
  );
};