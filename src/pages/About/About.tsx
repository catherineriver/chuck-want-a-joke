import * as React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import { Box, Container, Typography } from '@mui/material'

const About = () => {
  return (
    <Container maxWidth="xl" component="main">
      <PageTitle title="How did Chuck Norris jokes start?" />
      <Box
        my={3}
        sx={{
          height: 100,
          background:
            'url(https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '0 15%'
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          margin: { md: '0 -15px' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            flex: '1',
            padding: { md: '0 15px' },
            margin: { xs: '15px 0' }
          }}
        >
          <Typography variant="body1">
            The Chuck Norris jokes started in the summer of 2005 as the result
            of a thread on the SomethingAwful forums. A thread started called
            &quot;Post Your Vin Diesel Facts&quot; in response to the movie
            &quot;The Pacifier&quot; coming out. This movie featured Vin Diesel
            as a Navy SEAL turned babysitter. After the thread died out a
            teenager named Ian Spector decided to make a web page called the
            &quot;Vin Diesel Fact Generator&quot; to be a repository for the
            &quot;facts&quot; and allow visitors to make new &quot;facts&quot;.
            The web site had some popularity but started to die out by the
            summer, so Spector solicited suggestions for a replacement for Vin
            Diesel.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            flex: '1',
            padding: { md: '0 15px' },
            margin: { xs: '15px 0' }
          }}
        >
          <Typography variant="body1">
            Norris was the winner by an overwhelming margin on write-in votes.
            This was possibly because of the &quot;Walker Texas Ranger
            lever&quot; joke which Conan O&apos;Brien was running on the Tonight
            Show at the same time. As a result Spector changed the &quot;Vin
            Diesel Fact Generator&quot; into the &quot;Chuck Norris Fact
            Generator&quot; which you can visit at Chuck Norris Facts and the
            rest was history. The new generator debuted in December of 2005 and
            was just a one-pager with an email address to make submissions.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default About
