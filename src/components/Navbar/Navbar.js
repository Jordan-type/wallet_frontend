import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    height: 3.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;   
`;

const Wrapper = styled.div`
   padding: 1rem 2rem;
   display: flex;
   aligh-items: center;
   justify-content: space-evenly;
   width: 50%;
   box-sizing: border-box;
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  display:flex;
  align-items: center;
  margin-right: 1rem;
  &:hover {
    font-color: #fff;
    font-weight:300;
    
  }
`;

const NavLink = styled.li`
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: #f0ffff;
  color: #053330;
  &:hover {
    background-color: #fff;
    font-weight:600;
  }
  list-style-type: none;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;

`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem> Whitepaper </MenuItem>
        <MenuItem> Roadmap </MenuItem>
        <MenuItem> Team </MenuItem>
        <MenuItem>
        <NavLink>
        <Link to="/signup" style={{textDecoration:"none"}}>Signup</Link>
        </NavLink>
        </MenuItem> 
        <MenuItem> 
          <NavLink>
              <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
              </NavLink>
        </MenuItem>     
      </Wrapper>
    </Container>
    
  )
}

export default Navbar