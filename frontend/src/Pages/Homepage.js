import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        backgroundColor="white"
        textAlign={"center"}
        width="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="5px"
        borderColor="lightgreen"
      >
        <Text fontSize={"2xl"} fontFamily="">
          Mern Chat Application
        </Text>
      </Box>

      <Box
        d="flex"
        justifyContent="center"
        p={3}
        backgroundColor="white"
        textAlign={"center"}
        width="100%"
        m="20px 0 15px 0"
        borderRadius="lg"
        borderWidth="5px"
        borderColor="lightgreen"
      >
        <Tabs variant="line" isFitted colorScheme="green">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
