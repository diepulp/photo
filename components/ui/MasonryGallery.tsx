import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import { styled } from '@mui/material/styles'
import BlurImage from './BlurImage'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Image from 'next/image'
import { useState } from 'react'

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}))


export default function MasonryGallery({ images }) {

  console.log('iMages in the masonry', images)
  return (
    <Box
      sx={{
        width: '100%', // Allow the Box to take the full width of its parent container
        maxWidth: 1200, // Set a max width to maintain visual appeal on large screens
        margin: '1 auto', // Center the Box horizontally within the parent container
        padding: 5, // Optional: Add padding to prevent content from touching edges
      }}
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {images.map((image, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <BlurImage image={image} />
          </div>
        ))}
      </Masonry>
    </Box>

  )
}
