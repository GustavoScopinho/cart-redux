import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../../data/cartSlice'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import productList from '../../data/productList.json'
import styles from './ConteudoHome.module.css'

export const ConteudoHome = () => {
  const { cartProductIds } = useSelector(state => state.cart)
  const { addToCart, removeFromCart } = cartSlice.actions

  const dispatch = useDispatch()

  console.log(cartProductIds)

  return (
    <>
      <div className={styles.ContainerHome}>
        {productList.products.map(product => {
          return (
            <Card sx={{ width: 400 }} key={product.id}>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt="Image random"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">ID: {product.id}</Button>
                <Button size="small">PRICE: ${product.price}</Button>
                {!cartProductIds.includes(product.id) && (
                  <Button
                    size="small"
                    onClick={() => dispatch(addToCart(product.id))}
                  >
                    Add to cart
                  </Button>
                )}
                <Button
                  size="small"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove from cart
                </Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
    </>
  )
}
