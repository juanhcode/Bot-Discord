const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NzQwNjcyMDY3NzgzMDk4NDg5.XysanQ.esbZ2DSKAEQMKm9wfeBnfRnwu_U");

client.on("ready", () => {
  console.log(`Bot is ready as: ${client.user.tag}!`);
  client.user.setStatus("online");

  console.log(client.user.presence.status);

  const botchannel = client.channels.find((channel) => channel.name === "test");

  console.log(botchannel);
});

client.on("message", (message) => {
  //Recibe el mensaje el bot y conecta el mensaje del usuario
  console.log(message.content);
  if (message.content === "Hello") {
    message.channel.send(`Bienvenido ${message.author}!`);
  }

  if (message.content === "!campus") {
    message.channel.send("https://campusvirtual.univalle.edu.co/moodle/");
  }

  if (message.content === "!arquitectura") {
    message.channel.send("https://meet.google.com/jsy-bdvo-hck");
  }

  if (message.content === "!ipoo") {
    message.channel.send("https://meet.google.com/knd-pxow-nca");
    message.channel.send("Ipoo Lunes ");
  }

  if (message.content === "!ipoo2") {
    message.channel.send("https://meet.google.com/ade-vbpc-met");
    message.channel.send("Ipoo Sabado ");
  }

  if (message.content === "!calculo1") {
    message.channel.send("https://meet.google.com/lookup/c3zyhtqov3");
    message.channel.send("Calculo 1 ");
  }
  if (message.content.startsWith("!clear")) {
    async function clear() {
      {
        // await msg.delete();
        const fetched = await msg.channel.fetchMessages({ limit: 20 });
        msg.channel.bulkDelete(fetched);
        console.log("Messages deleted");
      }
    }
  }
});