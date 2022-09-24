const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kompanel",
  description: "Panel Vermeyi Sağlar",

  options: [{ type: "USER", name: "kişi", description: "Kişi", required: true }, { type: "ROLE", name: "panel", description: "Panel Seçiniz", required: true }],
  type: 'CHAT_INPUT',
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {

    const ayars = {
      "1004493388520886332": "Elmas",
      "1004493369159974932": "Altın",
      "1004493350939934760": "Gümüş",
      "1004493003974516767": "Bronz"
    }

    const rolls = ["1004493388520886332", "1004493369159974932", "1004493350939934760", "1004493003974516767"]

    if (!interaction.member.roles.cache.has("972511808323731497")) {

      interaction.followUp({ content: "Bu komutu kullanmak için gerekli yetkiye sahip değilsin" })

      return
    }

    if (!rolls.includes(`${interaction.options.getRole("panel").id}`)) {

      interaction.followUp({ content: "Bu rolü veremezsin!" })
      return
    }

    let sss = interaction.options.getRole("panel").id

    let tagi = ayars[sss]
    interaction.options.getMember("kişi").roles.add(`${interaction.options.getRole("panel").id}`)


    interaction.followUp({ content: "Başarılı :white_check_mark:" })
    interaction.followUp(`${interaction.options.getMember("kişi")}'başarıyla paneli alındı.`)

  },
};
