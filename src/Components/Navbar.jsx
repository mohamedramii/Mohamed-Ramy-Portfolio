import React, { useRef } from "react";
import styled from "styled-components";
import logo from '../img/logo.png'
import searchic from '../img//search.png'
import {Link} from "react-router-dom"

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
`;
const Navbar = ({ vh4, AboutMeref, Skillsref }) => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={logo} />
          <List>
            <ListItem
              type='button'
              onClick={() =>
                AboutMeref.current.scrollIntoView({ behavior: "smooth" })
              }>
              About me
            </ListItem>
            <ListItem
              type='button'
              onClick={() =>
                Skillsref.current.scrollIntoView({ behavior: "smooth" })
              }>
              Skills
            </ListItem>
            <ListItem
              type='button'
              onClick={() =>
                vh4.current.scrollIntoView({ behavior: "smooth" })
              }>
              Contact
            </ListItem>
          </List>
        </Links>
        <Icons>
          <a
            href='https://github.com/mohamedramii?tab=repositories'
            target='blank'>
            <Button>Github Repo</Button>
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
