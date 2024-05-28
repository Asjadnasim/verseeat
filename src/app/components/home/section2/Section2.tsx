import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <Flex flexDirection="column" backgroundColor="#E6D8C3">
      <Flex pt={"150px"} px={"50px"}>
        <Image
          src={`/assets/shark-tank-photo.png`}
          alt="Your Image"
          w="100%"
          h="auto"
          objectFit="cover"
        />
      </Flex>
      <Flex>
        <Image
          src={`/assets/dotted-lines.png`}
          alt="Your Image"
          w="120px"
          h="318px"
          objectFit="contain"
          ml={20}
          mt={-2}
        />{" "}
        <Image
          src={`/assets/section2-food.png`}
          alt="Your Image"
          w="190px"
          h="180px"
          objectFit="contain"
          ml={"-180px"}
          mt={24}
        />
        <Image
          src={`/assets/section2-cadamon.png`}
          alt="Your Image"
          w="210px"
          h="200px"
          objectFit="contain"
          ml={"-180px"}
          mt={"110px"}
          position={"absolute"}
          right={"20px"}
        />
      </Flex>
    </Flex>
  );
};

export default Section2;
