import { useDispatch, useSelector } from "react-redux";
import { useInterval } from "usehooks-ts";
import { decrementTimer, endGame } from "store/gameSlice";
import { getIsPlaying, getTimer } from "store/selectors";
import { Text } from "@chakra-ui/react";
import { useMemo } from "react";
import styled from "@emotion/styled";

interface StylingProps {
  isAlmostFinished: boolean;
}

const StyledText = styled(Text, {
  shouldForwardProp: (prop) => prop !== "isAlmostFinished",
})<StylingProps>`
  color: ${({ isAlmostFinished }) => (isAlmostFinished ? "red" : "black")};
`;

export const Countdown = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(getIsPlaying);
  const timer = useSelector(getTimer);

  const minutes = useMemo(() => {
    const mins = Math.floor(timer / 60);
    if (mins < 10) {
      return "0" + mins;
    }
    return mins.toString();
  }, [timer]);

  const seconds = useMemo(() => {
    const secs = timer % 60;
    if (secs < 10) {
      return "0" + secs;
    }
    return secs.toString();
  }, [timer]);

  const tick = () => {
    if (timer > 0) {
      dispatch(decrementTimer());
    }
    if (timer === 0) {
      dispatch(endGame());
    }
  };

  useInterval(tick, isPlaying ? 1000 : null);

  return (
    <StyledText fontSize="2xl" fontWeight="bold" isAlmostFinished={timer < 10}>
      {minutes}:{seconds}
    </StyledText>
  );
};
