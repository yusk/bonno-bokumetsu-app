import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default {
  api: {
    https: publicRuntimeConfig.API_URL,
  },
}
