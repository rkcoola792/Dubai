import React from 'react'
import Blog from '../Homepage/Blog';
import BlogWithImage from '../Homepage/BlogWithImage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const BlogsPage = () => {
  return (
    <div>
      <motion.div
        className="flex gap-6 sticky top-48 bg-subtleBlue z-10"
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5, delay: 0.1 }}
      >   
        <BlogWithImage
          heading="Social Media"
          subheading="complete web developer guideline 2023"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
          date="17 Feb, 2023"
          author="Janet Fleming"
        />
        <Blog
          heading="Social Media"
          subheading="complete web developer guideline 2023"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
          date="17 Feb, 2023"
          author="Janet Fleming"
        ></Blog>
      </motion.div>
      <motion.div
        className="flex gap-6 sticky top-48 bg-subtleBlue z-20"
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Blog
          heading="Social Media"
          subheading="complete web developer guideline 2023"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
          date="17 Feb, 2023"
          author="Janet Fleming"
        ></Blog>
        <BlogWithImage
          heading="Social Media"
          subheading="complete web developer guideline 2023"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
          date="17 Feb, 2023"
          author="Janet Fleming"
        />
      </motion.div>
    </div>
  );
}

export default BlogsPage
