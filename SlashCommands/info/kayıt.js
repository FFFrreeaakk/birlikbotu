const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kayıt",
  description: "Kayıt Etmeyi Sağlar.",

  options: [{ type: "USER", name: "kişi", description: "Kişi", required: true }, { type: "ROLE", name: "birlik", description: "Birlik Rolü Seçiniz", required: true }, { type: "STRING", name: "isim", description: "Kişi İsmi Varsa Sınıf", required: true }, { type: "STRING", name: "rütbe", description: "Rütbesi", required: true }],
  type: 'CHAT_INPUT',
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {

    const ayars = {

      "1004484963904798730": "T.S.K",
      "1004485287155605674": "E.G.M",
      "1004485447965212753": "A.S.K"
    }

    const rolls = ["1004484963904798730", "1004485287155605674", "1004485447965212753", "1004870954838667364"]

    if (!interaction.member.roles.cache.has("972511808323731497")) {

      interaction.followUp({ content: "Bu komutu kullanmak için gerekli yetkiye sahip değilsin" })

      return
    }

    if (!rolls.includes(`${interaction.options.getRole("birlik").id}`)) {

      interaction.followUp({ content: "Bu rolü veremezsin!" })
      return
    }

    let sss = interaction.options.getRole("birlik").id

    let tagi = ayars[sss]
    interaction.options.getMember("kişi").roles.add(`${interaction.options.getRole("birlik").id}`)

    interaction.options.getMember("kişi").setNickname(`[${tagi}]${interaction.options.getString("isim")}[${interaction.options.getString("rütbe")}]`)

    interaction.followUp({ content: "Başarılı :white_check_mark:" })
    interaction.followUp(`${interaction.options.getMember("kişi")}'başarıyla kayıtı yapıldı.`)

  },
};
