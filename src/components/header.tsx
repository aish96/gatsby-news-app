import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">News</Navbar.Brand>
    </Container>
  </Navbar>
)

export default Header