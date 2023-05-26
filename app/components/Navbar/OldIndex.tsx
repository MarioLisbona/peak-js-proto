'use client';

import { Box, Image, Flex, Link } from '@chakra-ui/react';

import eosLogoRed from 'public/images/eos_logo_red.svg';

export default function Navbar() {
  return (
    <>
      <Box px={14} py={7}>
        <Flex
          minH={'60px'}
          alignItems={'center'}
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Box>
            <Link href="#">
              <Image
                src={eosLogoRed.src}
                maxW={158}
                maxH={47}
                alt="Edit on The Spot Logo"
              />
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
