import React from 'react'
import { Card } from 'react-bootstrap'
import { ContentfulRichTextGatsbyReference, renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

const options = {
    renderMark: {
      [MARKS.BOLD]: (text:any) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node:any, children:any) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node:any, children:any) => {
        return <h2>{children}</h2>
      },
    },
  }

const NewsCard = (props: {thumbnailUrl: string, text: {raw:RenderRichTextData<ContentfulRichTextGatsbyReference>}, title: string, updatedAt: string, onClickHandler?: any}) => {
    debugger
  return  <Card onClick={() =>props.onClickHandler()}>
        <Card.Img variant="top" src={props.thumbnailUrl} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            <div>{renderRichText(props.text.raw, options)}</div>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated {props.updatedAt}</small>
        </Card.Footer>
    </Card>
}

export default NewsCard