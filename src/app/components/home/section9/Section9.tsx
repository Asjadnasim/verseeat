import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";

const Section9 = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="#E6D8C3"
      minHeight={400}
      mt="-370px"
    >
      <Flex>
        <Flex flexDirection={"column"}>
          <Heading
            as="h1"
            whiteSpace={"pre-line"}
            textTransform={"uppercase"}
            color="#F05C5C"
            fontFamily={"Guisol"}
            fontSize={"50px"}
            lineHeight={"60px"}
            mt={"200px"}
            ml={"70px"}
          >
            {"people who are \n loving our taste"}
          </Heading>
          <Heading
            fontFamily={"INDOSCREEN"}
            fontSize={"25px"}
            lineHeight={"30px"}
            ml={"70px"}
            mt={"20px"}
            color={"#331D2E"}
          >
            Genuine happiness captured
          </Heading>
        </Flex>
        <Flex gap="20px">
          <Button>{"<"}</Button>
          <Button>{">"}</Button>
        </Flex>
      </Flex>
      <Flex
        h="510px"
        w="510px"
        borderRadius="50px"
        backgroundColor="#FCE3B3"
        boxShadow="card-light"
        ml="70px"
        mt="50px"
        flexDirection="column"
      >
        <Image
          src={`/assets/double inverted comma.png`}
          w="50px"
          h="30px"
          mt="40px"
          ml="40px"
        />

        <Heading
          fontFamily="INDOSCREEN"
          color="#331D2E"
          fontWeight="400px"
          fontSize="25px"
          lineHeight="35px"
          mt="20px"
          ml="40px"
          w="405px"
          h="220px"
        >
          Craving an out-of-this-world dining experience from the comfort of
          your home ? Slay hunger with flavours from our eight diverse food
          planet, curated for your delight.
        </Heading>
        <Image
          src={`assets/profile pic sec-9.png`}
          w="100px"
          h="100px"
          ml="320px"
          mt="20px"
        />
        <Heading
          fontFamily="Guisol"
          fontSize="25px"
          fontWeight="400px"
          lineHeight="30px"
          color="#F05C5C"
          ml="310px"
          mt="10px"
        >
          Alivia Roy
        </Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Image
          src={`/assets/sec9 food left.png`}
          alt="your image"
          w="337px"
          h="326px"
          objectFit="contain"
          mt="85px"
          ml="-20px"
        />
        <Image
          src={`/assets/sec9 food right.png`}
          alt="your image"
          w="402px"
          h="426px"
          mt="15px"
          mr="-100px"
          objectFit="contain"
        />
      </Flex>
    </Flex>
  );
};

export default Section9;
