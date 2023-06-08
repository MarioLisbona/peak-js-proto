import React from "react";

import SectionContainer from "../SectionContainer";
import { Flex, Text, Button } from "@chakra-ui/react";

const OuterContainer = ({ selectAudio, children }) => {
  return (
    <SectionContainer>
      <Flex
        bg={"bgPink"}
        align={"center"}
        direction={"column"}
        p={"2rem"}
        borderRadius={"24px"}
      >
        <Text textStyle={"subheading"} mb={"2rem"}>
          Peak.js Waveform Prototype
        </Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify={"flex-start"}
          align={"center"}
          w={"100%"}
          mb={"2rem"}
        >
          <Text textStyle={"context"}>Choose and audio file</Text>
          <Button
            onClick={(evt) =>
              selectAudio((evt.target as HTMLButtonElement).value)
            }
            variant={"brandOutlined"}
            value={0}
            mt={{ base: "1rem", lg: "0rem" }}
            mb={{ base: "0.5rem", lg: "0rem" }}
          >
            Bird Song
          </Button>
          <Button
            onClick={(evt) =>
              selectAudio((evt.target as HTMLButtonElement).value)
            }
            variant={"brandOutlined"}
            value={1}
            mb={{ base: "0.5rem", lg: "0rem" }}
          >
            Car Passing
          </Button>
          <Button
            onClick={(evt) =>
              selectAudio((evt.target as HTMLButtonElement).value)
            }
            variant={"brandOutlined"}
            value={2}
            mb={{ base: "0.5rem", lg: "0rem" }}
          >
            Instrumental
          </Button>
        </Flex>
        <Flex
          h={"250px"}
          w={"100%"}
          border={"2px"}
          borderColor={"brandDarkGray"}
          borderRadius={"24px"}
          mb={"1rem"}
        >
          {children}
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default OuterContainer;
