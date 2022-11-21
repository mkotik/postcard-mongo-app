import { Textarea, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Input = ({ addCard }: { addCard: (text: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <Flex p="5px" w="100%">
      <Textarea
        bg="gray.100"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addCard(inputValue);
            setInputValue("");
          }
        }}
      />
    </Flex>
  );
};

export default Input;
