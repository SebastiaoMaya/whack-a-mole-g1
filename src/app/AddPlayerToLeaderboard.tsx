import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerName, getScore } from "store/selectors";
import { addPlayerToLeaderboard, changePlayerName } from "store/gameSlice";
import { v4 as uuidv4 } from "uuid";
import { Player } from "./interfaces";
import { addPlayerToLeaderboardApi } from "network/api";

export const AddPlayerToLeaderboard = () => {
  const initPlayerName = useSelector(getPlayerName);
  const [playerName, setPlayerName] = useState(initPlayerName);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentScore = useSelector(getScore);
  const dispatch = useDispatch();

  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPlayerName(name);
    dispatch(changePlayerName(name));
  };

  const player: Player = useMemo(
    () => ({ id: uuidv4(), name: playerName, score: currentScore }),
    [currentScore, playerName]
  );

  const handleOnClick = useCallback(async () => {
    try {
      await addPlayerToLeaderboardApi(player);
      dispatch(addPlayerToLeaderboard(player));
      setIsSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, player]);

  if (isSubmitted) {
    return <Text>You are now on the Leaderboard!</Text>;
  }

  return (
    <Flex direction="column" mt="4">
      <Text>Congratulations, you are on the leaderboard!</Text>
      <Flex direction="row" alignItems="center" mt="4">
        <Input
          color="black"
          value={playerName}
          onChange={handlePlayerNameChange}
          placeholder="Type your name"
          height="100%"
          width="100%"
        />
        <Button background="green" px="3" py="2" onClick={handleOnClick}>
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};
