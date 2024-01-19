import { Box, Circle, HStack, Text } from '@chakra-ui/react';
import { FullLinkedInLogo, LinkedInIcon } from './social-icons';
import { Testimonials as testimonialMain } from 'data/testimonial/testimonials';

export default function TestimonialCard(props: (typeof testimonialMain)[0]) {
  const testimonial = props;
  return (
    <Box bg="gray.800" rounded="2xl" position="relative" padding="6" shadow="highlight">
      <LinkedInBadge hasLinkedin={testimonial.linkedin == '' ? false : true} />

      <Box>
        <HStack spacing="5">
          <Circle overflow="hidden">
            <img
              alt={testimonial.name}
              width="50"
              height="50"
              className="lazyload"
              data-src={testimonial.image}
            />
          </Circle>
          <Box>
            <Text fontWeight="bold">{testimonial.name}</Text>
            <Text opacity={0.8} fontSize="sm">
              {testimonial.personTitle}
            </Text>
          </Box>
        </HStack>
      </Box>

      <Box
        marginTop="6"
        fontSize="sm"
        lineHeight="tall"
        as="blockquote"
        sx={{
          'p + p': {
            marginTop: '4',
          },
        }}
      />
      {testimonial.testimony}
    </Box>
  );
}

function LinkedInBadge(props: { hasLinkedin: boolean }) {
  return (
    <>
      {props.hasLinkedin ? (
        <>
          <Box
            position="absolute"
            right="6"
            display={{ base: 'none', md: 'block' }}
            color="brown.600"
          >
            <FullLinkedInLogo />
          </Box>
          <Box position="absolute" right="6" display={{ md: 'none' }} color="brown.600">
            <LinkedInIcon />
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
