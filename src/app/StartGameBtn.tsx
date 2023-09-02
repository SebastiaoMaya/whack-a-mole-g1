import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGameState, startGame } from "../store/gameSlice";
import { Button, Text } from "@chakra-ui/react";
import { getIsFinished, getIsPlaying } from "../store/selectors";

export const StartGameBtn = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(getIsPlaying);
  const isGameFinished = useSelector(getIsFinished);

  const handleOnClick = useCallback(
    () => (isPlaying ? dispatch(resetGameState()) : dispatch(startGame())),
    [dispatch, isPlaying]
  );

  if (isGameFinished) {
    return <></>;
  }

  return (
    <Button
      borderRadius="50%"
      color="white"
      background="red"
      width="50px"
      height="50px"
      onClick={handleOnClick}
    >
      <Text fontSize="lg" fontWeight="bold">
        {isPlaying ? "Retry" : "Start"}
      </Text>
    </Button>
  );
};
