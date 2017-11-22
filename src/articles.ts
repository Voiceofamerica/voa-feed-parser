import { getArticles } from './parser'
import { Response } from './response'
import { APIGatewayEvent, APIGatewayEventRequestContext, Callback } from 'aws-lambda'

export async function articles(
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext,
  callback: Callback
) {
  let err, articlesArray

  let baseUrl = resolveBaseUrl()

  const queryParams = event ? event.queryStringParameters || {} : {}

  const audience = queryParams['source']
  if (audience) {
    baseUrl = resolveBaseUrl(audience.toLowerCase())
    delete queryParams['source']
  }

  try {
    articlesArray = await getArticles(baseUrl, queryParams)
  } catch (ex) {
    err = ex
  } finally {
    callback(null, new Response(articlesArray, err))
  }
}

function resolveBaseUrl(target?: string): string {
  switch (target) {
    case 'zh':
      return 'https://www.voachinese.com'
    case 'fa':
      return 'https://ir.voanews.com'
    case 'en':
    default:
      return 'https://www.rferl.org'
  }
}
