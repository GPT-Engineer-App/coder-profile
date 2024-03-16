import React from "react";
import { Box, Heading, Text, VStack, HStack, Wrap, WrapItem, Link, Container, Image, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of the project.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDU3ODA2Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of the project.",
      image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDU3ODA2Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of the project.",
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDU3ODA2Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
  ];

  const skills = ["JavaScript", "React", "Node.js", "HTML/CSS", "Python"];

  return (
    <Box bg="gray.100" minHeight="100vh">
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          {/* About Me */}
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <HStack spacing={4} mb={4}>
              <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEwNTc4MDY2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Programmer" borderRadius="full" boxSize="150px" />
              <Box>
                <Heading as="h3" size="lg">
                  John Doe
                </Heading>
                <Text fontSize="xl">Full Stack Developer</Text>
              </Box>
            </HStack>
            <Text>I am a passionate programmer with experience in web development using modern technologies. I enjoy building scalable and user-friendly applications.</Text>
          </Box>

          {/* Projects */}
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" mb={4}>
              Projects
            </Heading>
            <Wrap spacing={4}>
              {projects.map((project, index) => (
                <WrapItem key={index}>
                  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src={project.image} alt={project.title} />
                    <Box p={4}>
                      <Heading as="h3" size="md" mb={2}>
                        {project.title}
                      </Heading>
                      <Text>{project.description}</Text>
                      <Link href={project.link} color="blue.500" mt={2}>
                        View Project
                      </Link>
                    </Box>
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          {/* Skills */}
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" mb={4}>
              Skills
            </Heading>
            <Wrap spacing={4}>
              {skills.map((skill, index) => (
                <WrapItem key={index}>
                  <Box bg="blue.500" color="white" px={4} py={2} borderRadius="md">
                    {skill}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          {/* Contact */}
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" mb={4}>
              Contact
            </Heading>
            <Text mb={4}>Feel free to reach out to me through:</Text>
            <HStack spacing={4}>
              <Link href="https://github.com/johndoe" isExternal>
                <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" variant="ghost" />
              </Link>
              <Link href="https://linkedin.com/in/johndoe" isExternal>
                <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" variant="ghost" />
              </Link>
              <Link href="mailto:johndoe@example.com">
                <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" variant="ghost" />
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
