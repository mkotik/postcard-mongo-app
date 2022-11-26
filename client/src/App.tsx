import { useEffect } from "react";
import { Wrap, Box } from "@chakra-ui/react";
import { useState } from "react";
import Postcard from "./components/Postcard";
import Input from "./components/Input";
import {
  addPostcard,
  deletePostcard,
  getAllPostcards,
  updatePostcard,
} from "./services/apiService";

const App = () => {
  const [cardData, setCardData] = useState<{ text: string; _id: string }[]>([]);

  const getAllCards = async () => {
    const allCards = await getAllPostcards();
    if (allCards) setCardData(allCards);
  };

  const addCard = async (text: string) => {
    const allCards = await addPostcard(text);
    if (allCards) setCardData(allCards);
  };

  const deleteCard = async (id: string) => {
    const allCards = await deletePostcard(id)!;
    if (allCards) setCardData(allCards);
  };

  const updateCard = async (id: string, text: string) => {
    const allCards = await updatePostcard(id, text);
    if (allCards) setCardData(allCards);
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <Box
      sx={{ minHeight: "100vh" }}
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
    >
      <Box
        sx={{
          maxWidth: "800px",
        }}
        m="auto"
      >
        <Wrap p="5px" direction="row" justify={"end"} align={"end"}>
          {cardData.map((card) => (
            <Postcard
              key={card._id}
              id={card._id}
              text={card.text}
              deleteCard={deleteCard}
              updateCard={updateCard}
            />
          ))}
        </Wrap>
        <Input addCard={addCard} />
      </Box>
    </Box>
  );
};

export default App;
