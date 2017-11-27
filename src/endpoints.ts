import { RssArticle } from './rss-interfaces/irssarticle'
import { getParsedContent } from './parser'
import { handleRequest } from './handlerHelper'
import { RssZone } from './rss-interfaces/irsszone'
import { RssSearch } from './rss-interfaces/irsssearch'
import { RssBreakingNews } from './rss-interfaces/irssbreakingnews'

export async function articles(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssArticle(), b, q)
  )
}

export async function search(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssSearch(), b, q)
  )
}

export async function breakingNews(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssBreakingNews(), b, q)
  )
}

export async function zones(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssZone(), b, q)
  )
}