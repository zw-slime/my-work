import { Observable } from 'rxjs/Observable';

export interface ApiConfig {
  url: string
  method: 'POST' | 'GET' | 'DELETE' | 'PUT'
  options?: {
    respondSchema?: any
    requestSchema?: any
  },
  requestBody?: any

}

export const api$ = (config: ApiConfig) => {
  const myHearder = new Headers({
    'Content-Type': 'text/plain'
  })
}
