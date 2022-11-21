import Postcard from "./Postcard";
import Input from "./Input";
import { Wrap, Box } from "@chakra-ui/react";
import { useState } from "react";
import _ from "lodash";

const App = () => {
  const [cardData, setCardData] = useState<{ text: string; id: string }[]>([]);

  const addCard = (text: string) => {
    const id = _.uniqueId("hi");
    setCardData((prevState) => [...prevState, { text, id }]);
    console.log(cardData);
  };
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
            <Postcard text={card.text} />
          ))}
        </Wrap>
        <Input addCard={addCard} />
      </Box>
    </Box>
  );
};

export default App;
