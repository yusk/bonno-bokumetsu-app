import { urls } from './config'
import axios from 'axios'

export const Instance = axios.create({
  baseURL: urls.api.https,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})
