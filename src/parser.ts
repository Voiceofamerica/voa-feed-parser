import { QueryParams } from '@voiceofamerica/voa-core-shared'
import { IRssEnvelope, IFeed, IFeedUrl } from './rss-interfaces/irssenvelope'
import { promisify } from 'bluebird'
import { parseString } from 'xml2js'
import * as request from 'request-promise-native'
import * as url from 'url'
import * as querystring from 'querystring'

const parseStringAsync = promisify(parseString)

export async function getParsedContent<TSource>(
  feed: IFeed<TSource>,
  baseUrl: string,
  queryParams = {}
): Promise<TSource[]> {
  const response = await getFeedContent(baseUrl, feed, queryParams)
  const data = await parseXmlContent(response)
  const source = feed.mapData(data)
  return source
}

async function parseXmlContent(feedContent): Promise<IRssEnvelope> {
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
  console.log(`${feedUrl}?${querystring.stringify(queryParams)}`)
  return await request(feedUrl, { qs: queryParams, json: true })
}
