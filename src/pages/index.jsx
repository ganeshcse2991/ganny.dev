import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/profile.jpg'
import { Link } from 'gatsby';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle> I'm Ganesh Ravi Shankar
        </BigTitle>
        <Subtitle>Software Engineer -- Co-Founder @Upshotly -- Opportunist -- Tech Enthusiast -- Performance and Scalability Enthusiast -- Polyglot</Subtitle>
        <ContactText>
            Say <a href="mailto:ganeshcsc2991@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/ganesh_upshotly">Twitter</a> &{' '}
            <a href="https://www.medium.com/@ganeshcsc2991">Medium</a> &{' '}
          <a href="https://github.com/ganeshcse2991/">GitHub</a> &{' '}
          <a href="https://www.linkedin.com/in/ganesh-ravi-shankar-08051265/">Linkedin</a>
          </ContactText>
      </Hero>
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Ganeh Ravi Shankar" />
          <AboutSub>
            Hello I'm Ganesh Ravi Shankar, a full-stack engineer by Profession. Building <a href="https://upshotly.com">Upshotly</a> now - a B2B SaaS Product.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am a full-stack engineer who believes strongly in test-driven development. I love to do clean and modularized code. 
          I believe any application can be scaled if the initial schema is built perfect.
          I am a performance and scalability enthusiast. I always love to explore new technologies and various organization's architectures.
          I am a beginner and starter in ML and DevOps.
          <br />
          <br/>
          My Skills - Java, NodeJS, ROR, ReactJS, Redux, GraphQL, JavaScript, AWS, GCP, Postgres, Mysql, DynamoDB, CouchDB, Memcache, Redis, RabitMQ.
        </AboutDesc>
      </About>
      <Projects offset={2}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="validate-graphql"
            link="https://github.com/ganeshcse2991/validate-graphql"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is my open-source project on GraphQL validations.
          </ProjectCard>
          <ProjectCard
            title="Building Upshotly"
            link="https://www.upshotly.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Building Upshotly with ReactJS, NodeJS, GraphqQL and Postgres
          </ProjectCard>
          <ProjectCard
            title="My Blogs"
            link="https://medium.com/@ganeshcsc2991"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Technical Articles about my work and the way I see Tech.
          </ProjectCard>
          <ProjectCard
            title="Source Code of this Blog"
            link="https://github.com/ganeshcse2991/ganny.dev"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Source Code for this Blog
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ganeshcsc2991@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/ganesh_upshotly">Twitter</a> &{' '}
            <a href="https://www.medium.com/@ganeshcsc2991">Medium</a> &{' '}
            <a href="https://github.com/ganeshcse2991/">GitHub</a> &{' '}
            <a href="https://www.linkedin.com/in/ganesh-ravi-shankar-08051265/">Linkedin</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Ganesh Ravi Shankar.{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
