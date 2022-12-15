import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import productList from '../../data/productList.json'
import styles from './ConteudoHome.module.css'

export const ConteudoHome = () => {
  productList.products.map(product => {
    console.log(product.id)
  })
  return (
    <>
      <div className={styles.ContainerHome}>
        {productList.products.map(product => {
          return (
            <Card sx={{ width: 400 }}>
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
              </CardActions>
            </Card>
          )
        })}
      </div>
    </>
  )
}
