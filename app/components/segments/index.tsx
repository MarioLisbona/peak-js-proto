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
} from "@chakra-ui/react";

import { Segment } from "peaks.js";

export default function DisplaySegments({ segments }: { segments: Segment[] }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
            segments.map((seg, idx) => (
              <Tr key={idx}>
                <Td>{seg._id}</Td>
                <Td isNumeric>{seg._startTime}</Td>
                <Td isNumeric>{seg._endTime}</Td>
                <Td isNumeric>{seg._endTime - seg._startTime}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
