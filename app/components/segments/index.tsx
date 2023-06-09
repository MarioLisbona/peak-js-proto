import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";

import { Segment } from "peaks.js";

export default function DisplaySegments({ segments }: { segments: Segment[] }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          <Text textStyle={"subheading"}>Logged Clips</Text>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Clip Name</Th>
            <Th>Start Time Code</Th>
            <Th>End Time Code</Th>
            <Th>Duration</Th>
          </Tr>
        </Thead>
        <Tbody>
          {segments.length > 0 &&
            segments.map((seg: Segment, idx: number) => (
              <Tr key={idx}>
                <Td>{seg.id}</Td>
                <Td isNumeric>{seg.startTime}</Td>
                <Td isNumeric>{seg.endTime}</Td>
                <Td isNumeric>{seg.endTime - seg.startTime}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
