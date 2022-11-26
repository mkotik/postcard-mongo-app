import {
  Card,
  CardBody,
  Text,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Postcard = ({
  text,
  id,
  deleteCard,
  updateCard,
}: {
  text: string;
  id: string;
  deleteCard: (id: string) => void;
  updateCard: (id: string, text: string) => void;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editModeText, setEditModeText] = useState(text);

  useEffect(() => {
    setEditModeText(text);
  }, [editMode]);
  return (
    <Card bgColor={"gray.100"} sx={{ alignSelf: "flexEnd" }}>
      <Box style={{ cursor: "pointer" }}>
        <p onClick={() => deleteCard(id)}>X</p>
      </Box>
      <Box style={{ cursor: "pointer" }}>
        <p onClick={() => setEditMode(true)}>Edit</p>
      </Box>
      <CardBody>
        {editMode ? (
          <Flex>
            <Input
              value={editModeText}
              onChange={(e) => setEditModeText(e.target.value)}
            />
            <Button
              onClick={() => {
                updateCard(id, editModeText);
                setEditMode(false);
              }}
            >
              Done
            </Button>
          </Flex>
        ) : (
          <Text sx={{ maxWidth: "300px" }}>{text}</Text>
        )}
      </CardBody>
    </Card>
  );
};

export default Postcard;
