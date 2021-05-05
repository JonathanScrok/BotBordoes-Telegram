const TelegramBot = require('node-telegram-bot-api')
const token = '1844579879:AAFWjglVBctQnFpJaI8VONh_cwJHpubKtPA'
const bot = new TelegramBot(token, { polling: true })


bot.onText(/(C|c)aio/, (msg) => {
    const chatId = msg.chat.id
    setTimeout(function() {
        bot.sendMessage(chatId, "Chamaram o furão? Vc tem o dom meu amigo!")
      }, 0)
})

bot.onText(/(b|B)runo/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Filosofo de merda")
    }, 0)
})

bot.onText(/(T|t)om/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "& Jerry ...")
    }, 0)
})

bot.onText(/(V|v)in(i|í)ci(u|o)s/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "MANO MANO MANO ESSA API DE MERDA EU VO MATA ESSA API")
    }, 0)
})

bot.onText(/(B|b)ino/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Cade o pedro? comeu teu cu subino KK")
    }, 0)
})

bot.onText(/(F|f)lavio/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "O cadeirante mais brabo")
    }, 0)
})

bot.onText(/(P|p)aulo/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "CALA BOCA SEU FILHO DA PUUUULTAA")
    }, 0)
})

bot.onText(/(A|a)lejandro/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Para de comer traveco, não faz bem pra saúde não!")
    }, 0)
})

bot.onText(/(V|v)agner/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Vagner com V fisiculturista")
    }, 0)
})

bot.onText(/(E|e)merson/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Você disse BNErson? o hasker?")
    }, 0)
})

bot.onText(/(S|s)er(g|j)io/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Borsa do carai")
    }, 0)
})

bot.onText(/(N|n)auffal/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Palestrinha vc quer?")
    }, 0)
})

bot.onText(/(F|f)ernando/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Quando cai o pagode?")
    }, 0)
})

bot.onText(/(J|j)ose/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Quero joga um RPG")
    }, 0)
})

bot.onText(/(A|a)l(y|i)(ss|s)on/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Essa questão ai, eu tenho que verificar ainda ..")
    }, 0)
})

bot.onText(/(J|j)esus/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Boa Fino!")
    }, 0)
})

bot.onText(/(W|w)elliton/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Agrrrrrrr AGRRRRRRRR AGRRRRRRRRRR")
    }, 0)
})

bot.onText(/(W|w)ell/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Pensa pelo lado bom cara, vc poderia estar individado e ser estagiário!")
    }, 0)
})

bot.onText(/(R|r)odrigo/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "BOSTA DE API, VÁ TOMA NO CU VC TMB BORSA")
    }, 0)
})

bot.onText(/(L|l)ukas/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Vo faze aplicativo, tchau")
    }, 0)
})

bot.onText(/(G|g)aida/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "@lisboa @JesusNessy @Marty quem pode ajudar?")
    }, 0)
})

bot.onText(/(E|e)mployer/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "Você disse Caio?")
    }, 0)
})

bot.onText(/(N|n)oel/, (msg) => {
  const chatId = msg.chat.id
  setTimeout(function() {
      bot.sendMessage(chatId, "A mimir ... zzzz")
    }, 0)
})