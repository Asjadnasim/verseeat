import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";

const Section6 = () => {
  return (
    <Flex
      backgroundColor="#DFAB45"
      minHeight={400}
      justifyContent="space-between"
    >
      <Flex>
        <Image
          src={`/assets/section6-food.png`}
          alt="Your Image"
          w={"480px"}
          h={"530px"}
          ml={"-80px"}
          mt={"200px"}
        />
      </Flex>
      <Flex
        flexDirection={"column"}
        gap={"30px"}
        alignItems={"flex-end"}
        my={"150px"}
        mr={"100px"}
      >
        <Heading
          as="h2"
          whiteSpace={"pre-line"}
          textTransform={"uppercase"}
          color="transparent"
          fontSize={"50px"}
          textAlign={"right"}
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "black",
          }}
        >
          {"hungry for news \n about us? Subscribe \n to our newsletters."}
        </Heading>
        <Input
          boxShadow={"card"}
          w="380px"
          h="70px"
          backgroundColor="#F5EDDC"
          placeholder="Your Email Here"
          borderRadius={"20px"}
          _placeholder={{
            color: "#331D2E",
          }}
        />
        <Button
          rightIcon={
            <Image
              src="/assets/right-arrow.png"
              alt="Submit"
              height={0}
              width={0}
              style={{ width: "auto", height: "auto", position: "relative" }}
            />
          }
          boxShadow="card"
          backgroundColor="purple.200"
          borderRadius={"10px"}
          textStyle="header-link"
          color="#FCE3B3"
          minWidth="160px"
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Section6;
