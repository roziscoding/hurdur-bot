import env from 'sugar-env'

export const config = {
  telegram: {
    apiToken: env.get('TELEGRAM_API_TOKEN', '')
  }
}

export type IAppConfig = typeof config
