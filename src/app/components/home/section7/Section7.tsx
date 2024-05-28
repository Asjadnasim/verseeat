import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";

const Section7 = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="#E6D8C3"
      minHeight={400}
      mt={"-140px"}
    >
      <Flex mt="200px" justifyContent="space-evenly">
        {["#diverseflavours", "#sparkingjoy", "#communitydriven"].map(
          (title) => (
            <Heading color={"#F05C5C"} fontSize={"40px"} h={"36.4px"}>
              {title}
            </Heading>
          )
        )}
      </Flex>
      <Image
        src={`/assets/burger.png`}
        alt="Your Image"
        w="598px"
        h="398px"
        objectFit="contain"
        alignSelf="end"
        mt="400px"
        mr="-50px"
      />
    </Flex>
  );
};

export default Section7;
