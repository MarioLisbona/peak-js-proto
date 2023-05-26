'use client';

import {
  Box,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  HStack,
  Icon,
  Spacer,
  Image,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';

import eosLogoWhite from 'public/images/eos_logo_white.svg';

const SocialButton = ({
  children,
  label,
  href,
  me,
}: {
  children: ReactNode;
  label: string;
  href: string;
  me: string;
}) => {
  return (
    <chakra.button
      rounded={'full'}
      w={{ base: '18px', md: '30px' }}
      h={{ base: '18px', md: '30px' }}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      me={me}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'transform 0.3s ease'}
      _hover={{
        transform: 'scale(1.1)',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={'brandRed'}
      px={{ base: '16px', md: '150px', xl: '70px' }}
      pt={{ base: '24px', md: '58px', xl: '49px' }}
      pb={{ base: '15px', md: '25px', xl: '35px' }}
    >
      <Flex justify={'center'}>
        <Flex direction={{ base: 'column', xl: 'row' }}>
          <Flex
            direction={'column'}
            minW={{ base: '174px', lg: '271px' }}
            align={{ base: 'center', xl: 'flex-start' }}
          >
            <Flex mb={{ base: '24px', lg: '32px' }}>
              <Link href="/">
                <Image
                  src={eosLogoWhite.src}
                  width={{ base: '135px', md: '180px' }}
                  height={{ base: '47px', md: '62px ' }}
                  alt="Edit on The Spot Logo"
                />
              </Link>
            </Flex>
            <Flex mb={{ base: '24px', lg: '32px' }}>
              <Link href={'/how-it-works'}>
                <Text
                  textStyle={'smBold'}
                  color={'white'}
                  fontSize={'16px'}
                  me={'32px'}
                >
                  How It Works
                </Text>
              </Link>
              <Link href={'/blog'}>
                <Text textStyle={'smBold'} color={'white'} fontSize={'16px'}>
                  Blog
                </Text>
              </Link>
            </Flex>
            <Flex>
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/editonthespot'}
                me={'32px'}
              >
                <Icon
                  as={FaTwitter}
                  color={'white'}
                  w={{ base: '18px', md: '30px' }}
                  h={{ base: '18px', md: '30px' }}
                />
              </SocialButton>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/editonthespot/'}
                me={'32px'}
              >
                <Icon
                  as={FaFacebook}
                  color={'white'}
                  w={{ base: '18px', md: '30px' }}
                  h={{ base: '18px', md: '30px' }}
                />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'https://instagram.com/editonthespot'}
                me={'32px'}
              >
                <Icon
                  as={FaInstagram}
                  color={'white'}
                  w={{ base: '18px', md: '30px' }}
                  h={{ base: '18px', md: '30px' }}
                />
              </SocialButton>
              <SocialButton
                label={'LinkedIn'}
                href={'https://www.linkedin.com/company/editonthespot'}
                me={'0px'}
              >
                <Icon
                  as={FaLinkedin}
                  color={'white'}
                  w={{ base: '18px', md: '30px' }}
                  h={{ base: '18px', md: '30px' }}
                />
              </SocialButton>
            </Flex>
          </Flex>
          <Flex
            direction={'column'}
            ps={{ xl: '147px' }}
            pe={{ xl: '147px' }}
            justify={'space-between'}
            align={'center'}
          >
            <Text
              textStyle={'context'}
              textAlign={'center'}
              fontWeight={'600'}
              color={'white'}
              mt={{ base: '24px', lg: '50px', xl: '0px' }}
              mb={{ base: '8px', lg: '22px', xl: '0px' }}
            >
              Contact us
            </Text>
            <Text
              textStyle={'smContext'}
              textAlign={'center'}
              fontWeight={'600'}
              color={'white'}
            >
              Got a question? Find the answers you seek in our help section,
              email us directly or fill in the form and our dedicated customer
              support team will be sure to get back to you within 48 hours.{' '}
            </Text>
          </Flex>
          <Flex
            justify={'center'}
            alignItems={'center'}
            mt={{ base: '40px', lg: '50px', xl: '0px' }}
          >
            <Link href={'mailto:mail@editonthespot.com'}>
              <Flex justify={'center'} alignItems={'center'}>
                <Icon
                  as={IoMailSharp}
                  color={'white'}
                  w={{ base: '13px', lg: '20px' }}
                  h={{ base: '10px', lg: '16px' }}
                  me={{ base: '5px', lg: '16px' }}
                />
                <Text
                  textStyle={'smContext'}
                  fontWeight={'600'}
                  color={'white'}
                >
                  mail@editonthespot.com
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        borderTop={'1px'}
        color={'white'}
        mt={{ base: '32px', lg: '50px', xl: '32px' }}
        justify={'space-between'}
        pt={{ base: '24px', lg: '10px' }}
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Link href={'/privacy-policy'}>
            <Text
              textStyle={'smContext'}
              color={'white'}
              fontSize={'16px'}
              me={{ md: '24px' }}
              mb={{ base: '32px', md: '0px' }}
            >
              Privacy Policy
            </Text>
          </Link>
          <Link href={'/terms-of-service'}>
            <Text textStyle={'smContext'} color={'white'} fontSize={'16px'}>
              Terms of Service
            </Text>
          </Link>
        </Flex>
        <Text
          textStyle={'smContext'}
          textAlign={'right'}
          color={'white'}
          fontSize={'16px'}
        >
          © Copyright Edit on the Spot 2023
        </Text>
      </Flex>
    </Box>
  );
}
