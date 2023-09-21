import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, we are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imageUrl={blog01} date={"Sep 26, 2023"} title={"Open AI is the future, let's explore how it is"}></Article>
        </div>
        <div className='gpt3__blog-container_groupB '>
          <Article imageUrl={blog02} date={"Sep 25, 2023"} title={"Open AI is the future, let's explore how it is"}></Article>
          <Article imageUrl={blog03} date={"Sep 24, 2023"} title={"Open AI is the future, let's explore how it is"}></Article>
          <Article imageUrl={blog04} date={"Sep 24, 2023"} title={"Open AI is the future, let's explore how it is"}></Article>
          <Article imageUrl={blog05} date={"Sep 23, 2023"} title={"Open AI is the future, let's explore how it is"}></Article>
        </div> 
      </div>
    </div>
  )
}

export default Blog