import {
  RssLiveAudio,
  RssLiveVideo,
  RssScheduler,
  RssVideoScheduler,
} from './rss-interfaces/irssprogram'
import {
  RssAudioClips,
  RssBreakingNews,
  RssTopStories,
} from './rss-interfaces/irsscontent'
import { RssArticle } from './rss-interfaces/irssarticle'
import { getParsedContent } from './parser'
import { handleRequest } from './handlerHelper'
import { RssZone } from './rss-interfaces/irsszone'
import { RssSearch } from './rss-interfaces/irsssearch'

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

export async function topStories(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssTopStories(), b, q)
  )
}

export async function scheduler(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssScheduler(), b, q)
  )
}

export async function videoScheduler(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssVideoScheduler(), b, q)
  )
}

export async function liveAudio(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssLiveVideo(), b, q)
  )
}

export async function liveVideo(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssLiveAudio(), b, q)
  )
}

export async function audioClips(event, context, callback) {
  await handleRequest(
    event,
    context,
    callback,
    async (b, q) => await getParsedContent(new RssAudioClips(), b, q)
  )
}
