/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import urls from './config'

export const Instance = axios.create({
  baseURL: urls.api.https,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})
