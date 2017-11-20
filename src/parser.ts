import { IArticle } from 'voa-core-shared'
import { IRssEnvolope, IFeed, IFeedUrl } from './rss-interfaces/irssenvolope'
import { RssArticle, IRssArticle } from './rss-interfaces/irssarticle'
import { promisify } from 'bluebird'
import { parseString } from 'xml2js'
import * as request from 'request-promise-native'
const url = require('url')
// import { IArticle } from 'voa-core-shared'

const parseStringAsync = promisify(parseString)

export async function getArticles(baseUrl: string): Promise<IRssArticle[]> {
  return await getParsedContent<IRssArticle>(baseUrl, new RssArticle())
}

async function getParsedContent<TSource>(
  baseUrl: string,
  feed: IFeed<TSource>
): Promise<TSource[]> {
  const response = await getFeedContent(baseUrl, feed)
  const data = await parseXmlContent(response)
  const source = feed.mapData(data)
  // return feed.adaptData(source)
  return source
}

async function parseXmlContent(feedContent): Promise<IRssEnvolope> {
  return await parseStringAsync(feedContent, {
    explicitArray: false,
    mergeAttrs: true,
  })
}

async function getFeedContent(baseUrl: string, feedUrlProvider: IFeedUrl) {
  const feedUrl = url.resolve(baseUrl, feedUrlProvider.feedUrl)
  return await request(feedUrl)
}
