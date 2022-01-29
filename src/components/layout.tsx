import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { StaticQuery, graphql, navigate } from 'gatsby'
import Header from './header'

import './layout.css'
import { getDescription, getShortDescription, INewsItem } from './consts'
import NewsCard from './card'
type Props = {
  children: React.ReactNode
}

function onClick(id: string): void {
  navigate(`/${id}`);
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allContentfulNews {
          edges {
            node {
              contentful_id
              title
              thumbnailUrl
              text {
                raw
              }
              updatedAt(fromNow: true)
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={'News'} />
        <Row xs={1} md={2} lg={3} className="g-4 p-4">
          {data.allContentfulNews.edges.map((node: { node: INewsItem }) => {
            const { thumbnailUrl, title,contentful_id, updatedAt } = node.node;
            return (
              <Col key={contentful_id}>
                <NewsCard
                  title={title}
                  text={node.node.text}
                  thumbnailUrl={thumbnailUrl}
                  updatedAt={updatedAt}
                  onClickHandler={onClick.bind(this, contentful_id)}
                />
              </Col>
            )
          })}
        </Row>
      </>
    )}
  />
)

export default Layout;