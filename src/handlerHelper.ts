import { Response } from './response'
import { APIGatewayEvent, APIGatewayEventRequestContext, Callback } from 'aws-lambda'
import { ZhUrl, FaUrl, EnUrl } from './config'
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
    err = ex
  } finally {
    callback(null, new Response(resultArray, err))
  }
}

function resolveBaseUrl(target?: string): string {
  switch (target) {
    case 'zh':
      return ZhUrl
    case 'fa':
      return FaUrl
    case 'en':
    default:
      return EnUrl
  }
}
