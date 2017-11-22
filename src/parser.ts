import { QueryParams } from 'voa-core-shared'
import { IRssEnvolope, IFeed, IFeedUrl } from './rss-interfaces/irssenvolope'
import { RssArticle, IRssArticle } from './rss-interfaces/irssarticle'
import { promisify } from 'bluebird'
import { parseString } from 'xml2js'
import * as request from 'request-promise-native'
const url = require('url')

const parseStringAsync = promisify(parseString)

export async function getArticles(
  baseUrl: string,
  queryParams: QueryParams = {}
): Promise<IRssArticle[]> {
  return await getParsedContent<IRssArticle>(baseUrl, new RssArticle(), queryParams)
}

async function getParsedContent<TSource>(
  baseUrl: string,
  feed: IFeed<TSource>,
  queryParams = {}
): Promise<TSource[]> {
  const response = await getFeedContent(baseUrl, feed, queryParams)
  const data = await parseXmlContent(response)
  const source = feed.mapData(data)
  return source
}

async function parseXmlContent(feedContent): Promise<IRssEnvolope> {
  return await parseStringAsync(feedContent, {
    explicitArray: false,
    mergeAttrs: true,
  })
}

async function getFeedContent(
  baseUrl: string,
  feedUrlProvider: IFeedUrl,
  queryParams = {}
) {
  const feedUrl = url.resolve(baseUrl, feedUrlProvider.feedUrl)
  return await request(feedUrl, { qs: queryParams, json: true })
}
