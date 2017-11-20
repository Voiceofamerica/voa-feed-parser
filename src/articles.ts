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

  if (event && event.queryStringParameters) {
    const audience = event.queryStringParameters['source']
    console.log(audience)
    if (audience) {
      baseUrl = resolveBaseUrl(audience.toLowerCase())
    }
  }

  console.log(baseUrl)

  try {
    articlesArray = await getArticles(baseUrl)
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
