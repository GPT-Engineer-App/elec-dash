// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, Button, Image, Input, Stack, IconButton, useColorMode, useColorModeValue, Container, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch, FaFolderPlus, FaArchive } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Heading as="h1" size="xl" color={textColor}>
            Flexible & Printed Electronics Archive
          </Heading>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle color mode" />
        </Flex>
        <Input placeholder="Search documents, multimedia..." size="lg" leftIcon={<FaSearch />} />
        <HStack spacing={4}>
          <Button leftIcon={<FaFolderPlus />} colorScheme="blue">
            Add New
          </Button>
          <Button leftIcon={<FaArchive />} colorScheme="green">
            Archive
          </Button>
          <Button leftIcon={<FaSearch />} colorScheme="purple">
            AI Search
          </Button>
        </HStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} w="full">
          <GridItem colSpan={1}>
            <Box bg={bgColor} p={4} borderRadius="md">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                Categories
              </Text>
              <VStack alignItems="start">
                <Button variant="ghost">Documents</Button>
                <Button variant="ghost">Multimedia</Button>
                <Button variant="ghost">Research Papers</Button>
              </VStack>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box bg={bgColor} p={4} borderRadius="md">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                Recent Additions
              </Text>
              <Stack spacing={4}>
                <Flex alignItems="center">
                  <Image src="https://images.unsplash.com/photo-1628744404730-5e143358539b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmbGV4aWJsZSUyMGVsZWN0cm9uaWNzfGVufDB8fHx8MTcxNDAxODAyNHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="md" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Introduction to Flexible Electronics</Text>
                    <Text fontSize="sm">Added on 01/01/2023</Text>
                  </Box>
                </Flex>
                <Flex alignItems="center">
                  <Image src="https://images.unsplash.com/photo-1612886653463-311e7497e688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwZWxlY3Ryb25pY3N8ZW58MHx8fHwxNzE0MDE4MDI1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="md" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Advances in Printed Circuit Boards</Text>
                    <Text fontSize="sm">Added on 12/31/2022</Text>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
