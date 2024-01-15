import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {useSelector , useDispatch} from "react-redux";



const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
      },
}));





export default function ShoppingCartButton() {
      const navigate = useNavigate();
      const count = useSelector(state => state.count)
      console.log(count)
      const dispatch = useDispatch();
      

      const openCartComponent = () => {
            navigate("/GoToCart")
      }

      return (
                  <IconButton onClick={openCartComponent} aria-label="cart">
                        <StyledBadge badgeContent={count} color="secondary">
                              <ShoppingCartIcon />
                        </StyledBadge>
                  </IconButton>


      );
}