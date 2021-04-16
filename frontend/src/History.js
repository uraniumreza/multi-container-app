import { Button } from '@chakra-ui/button';
import { Box, Divider, Text } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React from 'react'

export default function History({ title = "Log of Today's Entry" }) {
  return (
    <Box mt={50}>
      <Text
        textAlign="center"
        fontSize="xl"
        fontWeight="semibold"
        mb={5}
        lineHeight="tight"
        isTruncated
      >
        {title}
      </Text>
      <Divider />
      <Table variant="striped" colorScheme="orange" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Check in</Th>
            <Th>Check out</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Nayeem Reza</Td>
            <Td>09:30 AM</Td>
            <Td><Button colorScheme="orange" size="xs">Check Out</Button></Td>
          </Tr>
          <Tr>
            <Td>Afsana Jeba</Td>
            <Td>09:27 AM</Td>
            <Td><Button colorScheme="orange" size="xs">Check Out</Button></Td>
          </Tr>
          <Tr>
            <Td>Ahsan Nahiyan</Td>
            <Td>09:00 AM</Td>
            <Td>10:25 AM</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}
