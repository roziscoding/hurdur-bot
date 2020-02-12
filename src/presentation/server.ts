import app from './app'
import { IAppConfig } from '../config'

function start (config: IAppConfig) {
  const bot = app.factory(config)
  bot.startPolling()
}

export default { start }
