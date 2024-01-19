import { Box, Flex, Heading, HStack, Stack } from '@chakra-ui/react';

import LinkItem from './link-item';
import { GithubIcon, WebsiteIcon } from './social-icons';
import { projectData } from 'data/project/projects';

export default function ProjectCard(props: (typeof projectData)[0]) {
  const project = props;

  return (
    <Flex gap="20" direction={{ base: 'column', md: 'row' }}>
      <Box maxWidth={{ md: '27.5rem' }} flex="1">
        <Stack spacing="6">
          <Heading as="h3" color="brown.600" letterSpacing="tight">
            {project.title}
          </Heading>
          {(project.gitHubLink || project.websiteLink) && (
            <HStack spacing="12">
              {project.gitHubLink && (
                <LinkItem icon={GithubIcon} href={project.gitHubLink} iconColor="whiteAlpha.600">
                  Github
                </LinkItem>
              )}
              {project.websiteLink && (
                <LinkItem icon={WebsiteIcon} href={project.websiteLink} iconColor="whiteAlpha.600">
                  Website
                </LinkItem>
              )}
            </HStack>
          )}
          <Box fontSize="lg">
            <p>{project.description}</p>
          </Box>
        </Stack>
      </Box>

      <ProjectImageCard src={project.image} alt={project.title} objectPosition={'vGutter'} />
    </Flex>
  );
}

type ProjectImageCardProps = {
  src?: string;
  alt: string;
  objectPosition?: string;
};

function ProjectImageCard(props: ProjectImageCardProps) {
  const { src, alt, objectPosition = '-16%' } = props;
  return (
    <Box
      flex={{ md: '1' }}
      position="relative"
      height="25rem"
      width="100%"
      overflow="hidden"
      bg="linear-gradient(180deg, #FEB48C 0%, #1EBBFF 100%);"
      rounded="2xl"
    >
      <Box
        position="absolute"
        left="10"
        top="10"
        width="56.25rem"
        height="31.25rem"
        bg="white"
        rounded="lg"
        overflow="hidden"
        boxShadow="xl"
        sx={{
          ' > span': {
            transform: 'scale(1.01)',
          },
        }}
      >
        <img alt={alt} src={src} style={{ objectFit: 'cover', objectPosition }} />
      </Box>
    </Box>
  );
}
