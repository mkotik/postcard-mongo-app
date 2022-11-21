import { Card, CardBody, Text } from "@chakra-ui/react";

const Postcard = ({ text }: { text: string }) => {
  return (
    <Card bgColor={"gray.100"} sx={{ alignSelf: "flexEnd" }}>
      <CardBody>
        <Text sx={{ maxWidth: "300px" }}>{text}</Text>
      </CardBody>
    </Card>
  );
};

export default Postcard;
