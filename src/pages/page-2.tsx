import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Container } from 'react-bootstrap';
import Header from '../components/header';
import NewsCard from '../components/card';
import { getDescription } from '../components/consts';

type Props = {
  location: any;
}

const SecondPage = ({ location }: Props) => {
  const contentfulId = location.pathname.split('/')[1];
  return <StaticQuery
    query={graphql`
  query getNews {
    contentfulNews(contentful_id: {eq: "3N9MNmUOWQAS40hTeEIRMn"}) {
      id
      thumbnailUrl
      text {
        raw
      }
      title
      updatedAt
    }
  }
`}
    render={(data) => {
      const { thumbnailUrl, title, updatedAt } = data.contentfulNews;
      return <>
        <Header siteTitle={'News'} />
        <Container fluid className='p-4'>
          <NewsCard
            thumbnailUrl={thumbnailUrl}
            title={title}
            text={getDescription(data.contentfulNews)}
            updatedAt={updatedAt}
          />
        </Container>
      </>
    }}
  />

}

export default SecondPage
