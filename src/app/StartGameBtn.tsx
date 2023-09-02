import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGameState, startGame } from "../store/gameSlice";
import { Button, Text } from "@chakra-ui/react";
import { getIsFinished, getIsPlaying } from "../store/selectors";

interface Props {
  retry?: boolean;
}

export const StartGameBtn: React.FC<Props> = ({ retry }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(getIsPlaying);
  const isGameFinished = useSelector(getIsFinished);

  const handleOnClick = useCallback(
    () =>
      isPlaying || retry ? dispatch(resetGameState()) : dispatch(startGame()),
    [dispatch, isPlaying, retry]
  );

  if (!retry && isGameFinished) {
    return <></>;
  }

  return (
    <Button
      borderRadius={retry ? "5px" : "50%"}
      color="white"
      background="red"
      width="60px"
      height="60px"
      onClick={handleOnClick}
    >
      <Text fontSize="lg" fontWeight="bold">
        {isPlaying || retry ? "Retry" : "Start"}
      </Text>
    </Button>
  );
};
