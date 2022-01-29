export interface INewsItem {
  contentful_id: string;
  text: { raw: string; };
  title: string;
  thumbnailUrl: string;
  updatedAt: string;
}

const limit = 125;

export function getDescription(node: INewsItem): string {
 return JSON.parse(node.text.raw).content[0].content[0].value;
}

export function getShortDescription(node:INewsItem):string{
  const description = getDescription(node)
  return description.length > limit ? description.substr(0, limit) + '...' : description;
}