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
  console.log("inside Displaysegments table", segments);
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Clip Name</Th>
            <Th>Start</Th>
            <Th>End</Th>
            <Th>Duration</Th>
          </Tr>
        </Thead>
        <Tbody>segments &&</Tbody>
      </Table>
    </TableContainer>
  );
}
