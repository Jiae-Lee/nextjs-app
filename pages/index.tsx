import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/posts'
import homeStyles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = ({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Blog</title>
      </Head>

      <section className={homeStyles.headingMd}>
        <p>NextJs & TypeScript</p>
        <p>(This is a website)</p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Posts</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) =>
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={homeStyles.lightText}>
                {date}
              </small>
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
