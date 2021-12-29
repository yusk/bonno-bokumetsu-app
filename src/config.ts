import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const urls = {
  api: {
    https: publicRuntimeConfig.API_URL,
  },
}
