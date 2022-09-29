import * as React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import { Container } from '@mui/material'
import RandomJoke from '../../features/RandomJoke/RandomJoke'

const Random = () => {
  return (
    <Container maxWidth="xl" component="main">
      <PageTitle title="Random joke" align="center" />
      <RandomJoke />
    </Container>
  )
}

export default Random
