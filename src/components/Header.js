import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import Close from "@mui/icons-material/Close"
import {useState , useSelector} from 'react'
import {selectCars} from "../features/car/carSlice"

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
    padding:0 20px;
    z-index:1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;

    a{
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;
      
    }

    @media(max-width:768px){
      display:none;
    }
` 

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`
const BurgerNav =styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    justify-content:flex-start;
    
    transform:${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s ease-in;

    li{
      padding:15px 0;
      border-bottom:1px solid rgba(0,0,0,.2);
      
      a{
        font-weight:600;
      }
    }
`

const CustomClose = styled(Close)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`


const Header = () => {
  const [burgerStatus , setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo"/>
      </a>
      <Menu>
        <a href="#model-s">Model S</a>
        <a href="#model-y">Model Y</a>
       <a href="#">Model 3</a>
        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=> setBurgerStatus(true)}></CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
       
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charching</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header