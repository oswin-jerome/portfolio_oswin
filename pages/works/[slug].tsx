
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Head from 'next/head'
import {Marked} from '@ts-stack/markdown'
const WorkPage = ({
    frontmatter: { title, date, cover_image },
    slug,
    content,
  }:any) => {
    return ( 
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='post container mx-auto mt-6 p-8'>
                {/* <h1 className='text-4xl font-bold mb-5'>{title}</h1> */}
                <div className='markdown prose prose-h1:text-accent' dangerouslySetInnerHTML={{ __html: Marked.parse(content) }}></div>
            </div>
        </div> 
    );
}




export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('md/works'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }:any) {
    const markdownWithMeta = fs.readFileSync(
        path.join('md/works', slug + '.md'),
        'utf-8'
      )
    
      const { data: frontmatter, content } = matter(markdownWithMeta)
    
      return {
        props: {
          frontmatter,
          slug,
          content,
        },
      }
}
 

export default WorkPage;