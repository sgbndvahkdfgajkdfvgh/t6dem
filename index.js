const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]
});

const app = require("express")();
app.listen(() => 0);
app.get("/", (req, res) => {
  res.send("Hi");
});

const config = {
  prefix: "-",
  channel2: "1212844067013267558",//ايدي شات الاستقالة
  channel3: "1212844057835864154",//ايدي شات العصابات
    channel4: "1212844056556605480",//ايدي شات الداخلية
  channel5: "",//ايدي شات مخالفات
  channel6: "1212844066082000906",//ايدي شات العدل
  channel7: "",//ايدي شات تسديد
  channel8: "",//ايدي شات يوتيوبر 
  channel9: "",//ايدي شات تيكتوكر
  channel10: "",//ايدي شات اعلامي
  channel11: "",//ايدي شات مطعم
  channel12: "",//ايدي شات معرض
  line: ""
}


const prefix = config.prefix;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "استقالة") {
    if(message.channel.id != config.channel2) return;
    let data = {};
    message.channel.send({ content: `اسمك؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: `الـعـمـر الحـقـيـقي` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` سبب استقالة؟` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `وظيفتك الحاليه؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `كم مده فلوظيفه؟` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تقديم استقالة `)
          .setDescription(`سوف يتم الرد عليك قريباً من المسؤولين
          <@&1212843549427499099>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر :",
              value: `${data.age}`
            },
            {
              name: "سبب الاستقالة :",
              value: `${data.iden}`
            },
            {
              name: "الوظيفة الحالية :",
              value: `${data.experts}`
            },
            {
              name: " المده في الوظيفة :",
              value: `${data.section}`
            }
          ])
          .setColor("#020000");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم استقالة يرجى إرسال:__** \`${prefix}استقالة\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});



client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "عصابه") {
    if(message.channel.id != config.channel3) return;
    let data = {};
    message.channel.send({ content: `اسمك؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` عمرك؟` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` خبراتك الاجراميه` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `هل قرات بنود العصابات؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `اي عصابه تبي
** الــبــلــودز | الـكـربـس |  الــكــرك   **  ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تقديم العصابات `)
          .setDescription(`سوف يتم الرد عليك قريباً من المسؤولين
          <@&1212843655929528390>
        
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر :",
              value: `${data.age}`
            },
            {
              name: "هل قرأت بنود العصابات :",
              value: `${data.iden}`
            },
            {
              name: "الخبرات الاجرامية :",
              value: `${data.experts}`
            },
            {
              name: "العصابة :",
              value: `${data.section}`
            }
          ])
          .setColor("#020000");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم ع العصابات يرجى إرسال:__** \`${prefix}عصابه\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});



client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "عسكرية") {
    if(message.channel.id != config.channel4) return;
    let data = {};
    message.channel.send({ content: `اسمك؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` عمرك؟` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` خبراتك العسكرية` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `هل قرات بنود الداخلية ` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `اي قطاع تبي
الامــن الـعـام ﹣ ✪  |  قـوات الـتـدخـل الـسـريـع ﹣ ⚔︎  ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تقديم الداخلية`)
          .setDescription(`سوف يتم الرد عليك قريباً من المسؤولين
          <@&1212843602141642813>`)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر :",
              value: `${data.age}`
            },
            {
              name: "هل قرأت بنود الداخلية:",
              value: `${data.iden}`
            },
            {
              name: "الخبرات العسكرية :",
              value: `${data.experts}`
            },
            {
              name: "القطاع :",
              value: `${data.section}`
            }
          ])
          .setColor("#020000");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم الداخلية يرجى إرسال:__** \`${prefix}عسكرية\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "مخالفة") {
    if(message.channel.id != config.channel5) return;
    let data = {};
    message.channel.send({ content: `اسمك عزيز العسكري؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` وقت المخالفة` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: `المخالفة` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `سعر المخالفه؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `منشن الشخص المخالف ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`مخالفات`)
          .setDescription(`سوف يتم تقفل الحساب المخالف فيه حال عدم التسديد `)
          .addFields([
            {
              name: "الاسم العسكري:",
              value: `${data.name}`
            },
            {
              name: "وقت المخالفه؟ :",
              value: `${data.age}`
            },
            {
              name: "المخالفة:",
              value: `${data.iden}`
            },
            {
              name: "سعر المخالفة:",
              value: `${data.experts}`
            },
            {
              name: "شخص المخالف:",
              value: `${data.section}`
            }
          ])
          .setColor("#020000");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتسجيل المخالفة يرجى إرسال:__** \`${prefix}مخالفة\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "العدل") {
    if(message.channel.id != config.channel6) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` عمرك ` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: `خبراتك` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: ` هل قريت القوانين؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `  الوظيفه |محقق|محامي|قاضي` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`العدل`)
          .setDescription(`سوف يتم الرد من احد المسؤولين
          <@416776060034744330>
          
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر ؟ :",
              value: `${data.age}`
            },
            {
              name: "خبراتك:",
              value: `${data.iden}`
            },
            {
              name: "هل قريت القوانين:",
              value: `${data.experts}`
            },
            {
              name: "الوظيفه:",
              value: `${data.section}`
            }
          ])
          .setColor("#020000");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم ع العدل يرجى إرسال:__** \`${prefix}العدل\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "تسديد") {
    if(message.channel.id != config.channel7) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: `  عمرك` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: `كم المبلغ` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `العسكري الي اعطاك مخالفه؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `جاهز نعم| لا ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تسديد`)
          .setDescription(``)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر ؟ :",
              value: `${data.age}`
            },
            {
              name: "كم المبلغ:",
              value: `${data.iden}`
            },
            {
              name: "العسكري الي اعطاك المخالفة:",
              value: `${data.experts}`
            },
            {
              name: "جاهز نعم|لا:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتسديد  يرجى إرسال:__** \`${prefix}تسديد\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "تيكتوكر") {
    if(message.channel.id != config.channel8) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: `  اسم حسابك` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: `كم متابع` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `ماذا سوف تقدم لى برو سيتي؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `وش محتواك ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تيكتوكر`)
          .setDescription(`سوف يتم الرد عليك من احد المسؤولين  
          <@&1114201759838113812>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "اسم حسابك ؟ :",
              value: `${data.age}`
            },
            {
              name: "كم متابعينك:",
              value: `${data.iden}`
            },
            {
              name: "ماذا سوف تقدم لى برو سيتي:",
              value: `${data.experts}`
            },
            {
              name: "وش محتواك:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتسجيل تيكتوكر  يرجى إرسال:__** \`${prefix}تيكتوكر\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "يوتيوبر") {
    if(message.channel.id != config.channel9) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: `  اسم حسابك` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: `كم متابع` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `ماذا سوف تقدم لى برو سيتي؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `وش محتواك ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`يتويوبر`)
          .setDescription(`سوف يتم الرد عليك من احد المسؤولين  
          <@&1114201759838113812>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "اسم حسابك ؟ :",
              value: `${data.age}`
            },
            {
              name: "كم متابعينك:",
              value: `${data.iden}`
            },
            {
              name: "ماذا سوف تقدم لى برو سيتي:",
              value: `${data.experts}`
            },
            {
              name: "وش محتواك:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتسجيل يوتيوبر  يرجى إرسال:__** \`${prefix}يوتيوبر\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "اعلامي") {
    if(message.channel.id != config.channel10) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: `  عمرك ` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` خبراتك` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `     
 هـل أنـت مـسـتعـد للإلـتـزام بـجـمـيـع قـوانـيـن وزارة الإعـلام وصـور الإعـلانـات :  
؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: ` جاهز نعم | لا ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`اعلامي`)
          .setDescription(`سوف يتم الرد عليك من احد المسؤولين  
          <@&1159177358922748034>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: " عمرك ؟ :",
              value: `${data.age}`
            },
            {
              name: " خبراتك:",
              value: `${data.iden}`
            },
            {
              name: "  هـل أنـت مـسـتعـد للإلـتـزام بـجـمـيـع قـو :",
              value: `${data.experts}`
            },
            {
              name: " جاهز:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم اعلامي  يرجى إرسال:__** \`${prefix}اعلامي\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "مطعم") {
    if(message.channel.id != config.channel11) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: `  عمرك ` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` خبراتك` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `     
جاهز
؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: ` جاهز نعم | لا ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`مطعم`)
          .setDescription(`سوف يتم الرد عليك من احد المسؤولين  
          <@&1114201984933839078>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: " عمرك ؟ :",
              value: `${data.age}`
            },
            {
              name: " خبراتك:",
              value: `${data.iden}`
            },
            {
              name: "جاهز",
              value: `${data.experts}`
            },
            {
              name: " جاهز:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم ع مطعم  يرجى إرسال:__** \`${prefix}مطعم\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "معرض") {
    if(message.channel.id != config.channel11) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: `  عمرك ` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` خبراتك` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `     
جاهز
؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: ` جاهز نعم | لا ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`معرض`)
          .setDescription(`سوف يتم الرد عليك من احد المسؤولين  
          <@&1114201982052335646>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: " عمرك ؟ :",
              value: `${data.age}`
            },
            {
              name: " خبراتك:",
              value: `${data.iden}`
            },
            {
              name: "جاهز",
              value: `${data.experts}`
            },
            {
              name: " جاهز:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم ع معرض  يرجى إرسال:__** \`${prefix}معرض\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;




   

   
   

client.login(('MTIxNTU3MTc1ODI3NTYyNTA1MQ.GAxkna.si81ty5CqAji2WeAxzTvwHSpzkx-2NfOe7F1T8'));