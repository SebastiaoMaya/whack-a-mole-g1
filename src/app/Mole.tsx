import React, { useMemo, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useInterval } from "usehooks-ts";
import { getRndInteger } from "../utils";
import {
  MAX_UNDERGROUND_DURATION_MS,
  MAX_VISIBILITY_DURATION_MS,
  MIN_UNDERGROUND_DURATION_MS,
  MIN_VISIBILITY_DURATION_MS,
} from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/gameSlice";
import { getScore } from "../store/selectors";

const StyledImage = styled(Image)`
  width: 100px;
`;

export const Mole: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const score = useSelector(getScore);
  const dispatch = useDispatch();

  const whack = () => {
    if (isVisible) {
      dispatch(increment());
      setIsVisible(false);
    } else {
      score >= 1 && dispatch(decrement());
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

  useInterval(popToggle, delay);

  return (
    <Flex onClick={whack} height="85px" alignItems="flex-end">
      <StyledImage
        src={isVisible ? "/WAM_Mole.png" : "/WAM_Hole.png"}
        draggable={false}
        userSelect="none"
      />
    </Flex>
  );
};
