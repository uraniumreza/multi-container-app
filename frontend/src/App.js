import { useState } from 'react';
import {
  ChakraProvider,
  Grid,
  theme,
  Input,
  Flex,
  Collapse,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import User from './User';
import History from './History';

function App() {
  const [showUser, setShowUser] = useState(true);
  const [loading, setLoading] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <Flex align='center' justify='center'>
        <Grid maxW="800px" mt={100} display="flex" flexDirection="column" alignItems="center">
          <InputGroup>
            <Input width="xl" placeholder="Search with ID" size="lg" mb={10} />
            <InputRightElement children={loading ? <Spinner mt={2} mr={3} /> : <SearchIcon w={5} h={5} mt={2} mr={2} color="green.500" />} />
          </InputGroup>
          <Collapse in={showUser} animateOpacity>
            <User name="Nayeem Reza" phone="01726106981" />
          </Collapse>
          <History />
        </Grid>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
