import Postcard from "./components/Postcard";
import Input from "./components/Input";
import { Wrap, Box } from "@chakra-ui/react";
import { useState } from "react";
import _ from "lodash";

const App = () => {
  const [cardData, setCardData] = useState<{ text: string; id: string }[]>([]);

  const addCard = (text: string) => {
    const id = _.uniqueId("hi");
    setCardData((prevState) => [...prevState, { text, id }]);
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
            <Postcard key={card.id} text={card.text} />
          ))}
        </Wrap>
        <Input addCard={addCard} />
      </Box>
    </Box>
  );
};

export default App;
