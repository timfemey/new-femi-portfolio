import { Box, Stack } from '@chakra-ui/react';
import Container from 'components/container';
import ProjectCard from 'components/project-card';
import { projectData } from 'data/project/projects';

export default function ProjectPage() {
  return (
    <Container>
      <Box py="vGutter">
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {projectData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
