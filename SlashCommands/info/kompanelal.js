const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "kompanelal", //komut adı
    description: "Panel Almayı Sağlar.",//komut açıklaması

    options: [{ type: "USER", name: "kişi", description: "Kişi", required: true }],
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => { //silinecek roller
      const paneller =  ["1004493003974516767","1004493350939934760","1004493369159974932","1004493388520886332"]
           
        if (!interaction.member.roles.cache.has("972511808323731497")){
interaction.followUp({ content: "Bu komutu kullanabilmek için yetkin yetersiz."})

return

return
}
interaction.options.getMember("kişi").roles.remove(paneller) //kişinin panellerini siler
interaction.followUp(`${interaction.options.getMember("kişi")}'Başarıyla Panelleri Alındı.`)
      
    },
};