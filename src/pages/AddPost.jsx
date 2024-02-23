import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 bg-gray-900 text-white'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost