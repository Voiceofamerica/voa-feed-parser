import { Response } from './response'
import { APIGatewayEvent, APIGatewayEventRequestContext, Callback } from 'aws-lambda'
import * as config from './config'
import { QueryParams } from '@voiceofamerica/voa-core-shared/dist/interfaces/queryParams'

type IDataGetter<TResult> = (
  baseUrl: string,
  queryParams: QueryParams
) => Promise<TResult[]>

export async function handleRequest<TResult>(
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext,
  callback: Callback,
  getter: IDataGetter<TResult>
) {
  let err: any
  let resultArray: TResult[] = []

  let baseUrl = resolveBaseUrl()

  const queryParams = event ? event.queryStringParameters || {} : {}

  const audience = queryParams['source']
  if (audience) {
    baseUrl = resolveBaseUrl(audience.toLowerCase())
    delete queryParams['source']
  }

  try {
    resultArray = await getter(baseUrl, queryParams)
  } catch (ex) {
    console.error(ex)
    err = ex
  } finally {
    callback(null, new Response(resultArray, err))
  }
}

function resolveBaseUrl(target?: string): string {
  switch (target) {
    case 'en':
      return config.EnUrl
    case 'en-us':
      return config.EnUsUrl
    case 'fa':
      return config.FaUrl
    case 'ko':
      return config.KoUrl
    case 'ur':
      return config.UrUrl
    case 'prs':
      return config.PrsUrl
    case 'pus':
      return config.PusUrl
    case 'vi':
      return config.ViUrl
    case 'zh':
      return config.ZhUrl
    default:
      return config.EnUsUrl
  }
}
