import {
  Box,
  Circle,
  Flex,
  Heading,
  HeadingProps,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import Container from 'components/container';
import Emoji from 'components/emoji';

import LinkItem from 'components/link-item';
import ProjectCard from 'components/project-card';
import { EmailIcon, FileIcon, LinkedInIcon, TwitterIcon } from 'components/social-icons';
import TestimonialCard from 'components/testimonial-card';

import { projectData } from 'data/project/projects';
import { Testimonials } from 'data/testimonial/testimonials';

import tools from 'data/tools';

import siteConfig from 'site.config';

function MainHeading(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: '4rem', md: '7rem' }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color="white"
      marginBottom="4"
      {...props}
    />
  );
}

export default function HomePage() {
  return (
    <Container>
      <Flex direction="column" paddingY="24">
        <MainHeading>Ishola Obafemi</MainHeading>
        <Text
          color="brown.600"
          display="block"
          fontSize="5xl"
          fontFamily="heading"
          fontWeight="bold"
          lineHeight="1.2"
        >
          Backend engineer &amp; Frontend developer
        </Text>

        <Text
          marginTop="14"
          fontFamily="body"
          maxWidth="40rem"
          fontSize={{ base: 'lg', md: '2xl' }}
        >
          I'm passionate about <Emoji>🎨</Emoji> developing web apps, <Emoji>⚙️</Emoji> servers,{' '}
          <Emoji>⚙️</Emoji> system designs and <Emoji>😍 </Emoji> great user experiences
        </Text>
      </Flex>

      {/* I develop web apps... */}
      <Flex
        paddingY="190"
        gap={{ base: '5', lg: '20' }}
        justify="space-between"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box maxWidth={{ lg: '36rem' }}>
          {/* Circular Headshot */}
          <Circle
            display={{ base: 'none', lg: 'flex' }}
            position={'relative'}
            size="6.25rem"
            float="left"
            marginRight="6"
            overflow="hidden"
          >
            <img
              alt="Ishola Obafemi"
              src="/static/images/IMG.jpg"
              fetchPriority="high"
              style={{ objectFit: 'cover' }}
            />
          </Circle>

          <Heading
            lineHeight="1"
            fontSize={{ base: '3rem', md: '5rem', lg: '6.25rem' }}
            letterSpacing="tight"
          >
            I develop{' '}
            <Box as="span" color="brown.600">
              resilient systems
            </Box>
          </Heading>
        </Box>

        <Box maxWidth={{ lg: '27.5rem' }} marginTop="4">
          <Text fontSize={{ base: 'lg', md: '2xl' }}>
            A developer with a strong programming background, specializing in systems architecture,
            frontend and backend programming for businesses and clients
          </Text>

          {/* Profile links */}
          <SimpleGrid columns={2} marginTop="10" spacing="10" maxWidth="16rem">
            <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
              LinkedIn
            </LinkItem>
            <LinkItem icon={TwitterIcon} href={siteConfig.profiles.twitter}>
              Twitter
            </LinkItem>
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              Email
            </LinkItem>
            <LinkItem icon={FileIcon} href={siteConfig.profiles.resume}>
              Resume
            </LinkItem>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Testimonials */}
      <Box as="section" aria-labelledby="heading" py="vGutter">
        <VisuallyHidden>Recommendations</VisuallyHidden>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          {Testimonials.map((testimonials, index) => (
            <Stack key={index} spacing="6">
              <TestimonialCard key={testimonials.name} {...testimonials} />
            </Stack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Tools & Softwares */}
      <Box as="section" py="vGutter">
        <Box marginBottom="16">
          <Heading size="3xl" letterSpacing="tight">
            Tools &amp; Softwares
          </Heading>
          <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
            Over the years, I had the opportunity to work with various software, tools and
            frameworks. Here are some of them:
          </Text>
        </Box>

        {/* ToolList */}
        <Wrap spacing="10">
          {tools.map((tool) => (
            <WrapItem fontFamily="heading" fontSize="3xl" color="brown.600" key={tool}>
              {tool}
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* Featured projects */}
      <Box as="section" py="vGutter">
        <Heading size="3xl" letterSpacing="tight">
          Featured Projects
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {projectData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </Stack>
        </Box>
      </Box>

      <Box as="hr" borderColor="whiteAlpha.300" />
    </Container>
  );
}
