import Telegraf from 'telegraf'
import { IAppConfig } from '../config'

function factory (config: IAppConfig) {
  const bot = new Telegraf(config.telegram.apiToken)

  bot.command('/hurdur', ctx => {
    if (!ctx.message) return

    if (!ctx.message.reply_to_message) {
      return ctx.reply('Damn! Telegram did not send me that message!', { reply_to_message_id: ctx.message.message_id })
    }

    const text = ctx.message.reply_to_message.text

    if (!text) return

    const newText = text.split('').map(letter => {
      const chance = Math.round(Math.random())
      return chance ? letter.toUpperCase() : letter.toLocaleLowerCase()
    }).join('')

    return ctx.reply(newText, { reply_to_message_id: ctx.message.reply_to_message.message_id })
  })

  return bot
}

export default { factory }
