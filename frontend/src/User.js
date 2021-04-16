import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react'

const User = ({ phone, name }) => {
  return (
    <Flex width="max-content" align="center" justify="flex-start" borderWidth="1px" borderRadius="lg" p={5}>
      <Text fontSize="5xl" fontWeight="bold">S029</Text>
      <Box ml={5}>
        <Text
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Name: {name}
        </Text>

        <Text>
          Phone: {phone}
        </Text>
      </Box>
      <Button ml ={8} colorScheme="orange">Check In</Button>
    </Flex>
  )
}

export default User;
