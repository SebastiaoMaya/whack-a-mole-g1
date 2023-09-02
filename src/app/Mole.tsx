import React, { useEffect, useMemo, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useInterval } from "usehooks-ts";
import { getRndInteger } from "utils";
import {
  MAX_UNDERGROUND_DURATION_MS,
  MAX_VISIBILITY_DURATION_MS,
  MIN_UNDERGROUND_DURATION_MS,
  MIN_VISIBILITY_DURATION_MS,
} from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { decrementScore, incrementScore } from "store/gameSlice";
import { getIsPlaying, getScore } from "store/selectors";

const StyledImage = styled(Image)`
  width: 100px;
`;

export const Mole: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const score = useSelector(getScore);
  const isPlaying = useSelector(getIsPlaying);
  const dispatch = useDispatch();

  useEffect(() => {
    !isPlaying && setIsVisible(false);
  }, [isPlaying]);

  const whack = () => {
    if (isVisible) {
      dispatch(incrementScore());
      setIsVisible(false);
    } else {
      score >= 1 && dispatch(decrementScore());
    }
  };

  const popToggle = () => setIsVisible((oldState) => !oldState);

  const delay = useMemo(
    () =>
      getRndInteger(
        isVisible ? MIN_VISIBILITY_DURATION_MS : MIN_UNDERGROUND_DURATION_MS,
        isVisible ? MAX_VISIBILITY_DURATION_MS : MAX_UNDERGROUND_DURATION_MS
      ),
    [isVisible]
  );

  const hole = useMemo(
    () => (
      <StyledImage src={"/WAM_Hole.png"} draggable={false} userSelect="none" />
    ),
    []
  );

  const mole = useMemo(
    () => (
      <StyledImage src={"/WAM_Mole.png"} draggable={false} userSelect="none" />
    ),
    []
  );

  useInterval(popToggle, isPlaying ? delay : null);

  return (
    <Flex
      onClick={isPlaying ? whack : undefined}
      height="85px"
      alignItems="flex-end"
    >
      {isVisible ? mole : hole}
    </Flex>
  );
};
