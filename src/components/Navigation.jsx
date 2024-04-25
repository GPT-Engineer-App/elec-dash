import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Flex as="nav" p="4" bg="blue.500" color="white">
      <Link as={RouterLink} to="/" px="4">Home</Link>
      <Link as={RouterLink} to="/blog" px="4">Blog</Link>
    </Flex>
  );
}

export default Navigation;