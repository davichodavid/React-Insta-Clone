import React from 'react';
import styled from 'styled-components';

const SearchBar = (props) => {
  return (
    <NavBar>
      <Logos>
        <LogosFA className="fab fa-instagram"></LogosFA>
        <LogosImg alt="text logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBUKxm-jPyGj0Hr0Z1J7kHkjc3WMAwUZ68qPY81ij1rY9v6Gl" />
      </Logos>

      <Form>
        <Input
          type="text"
          name="filteredPosts"
          placeholder="Search"
          onChange={props.filterPosts}
        >
        </Input>
      </Form>

      <Icons>
        <IconsFA className="far fa-compass"></IconsFA>
        <IconsFA className="far fa-heart"></IconsFA>
        <IconsFA className="fas fa-user"></IconsFA>
      </Icons>

    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 15px;
  border-bottom: 1px solid lightgray;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  width: 19%;
`;

const LogosFA = styled.i`
  font-size: 1.6rem;
  padding: 0 15px;
  border-right: 1px solid black;
`;

const LogosImg = styled.img`
  width: 55%;
  height: 55%;
  padding: 0 3%;
`;

const Icons = styled.div`
  font-size: 1.6rem;
  width: 13%;
  display: flex;
  justify-content: space-between;
  padding: 0 2%
`;

const IconsFA = styled.i`
  padding: 0 ;
`;

const Form = styled.form`
  width: 20%;
  height: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;


export default SearchBar;