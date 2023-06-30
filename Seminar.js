const channelID = "I3Ne5VmJJo6dOHIt";
const client = new Scaledrone(channelID);

client.on("open", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Povezivanje sa Scaledrone servisom je uspješno.");
  }
});

client.on("message", (message) => {
  displayMessage(message.author, message.content);
});

function sendMessage() {
  const inputElement = document.getElementById("message-input");
  const message = inputElement.value;
  inputElement.value = "";

  client.publish({
    room: "chat",
    message: {
      content: message,
      author: "tpint10",
    },
  });
}

function displayMessage(author, content) {
  const chatMessagesElement = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = author + ": " + content;
  chatMessagesElement.appendChild(messageElement);
}

document.getElementById("send-button").addEventListener("click", sendMessage);
document
  .getElementById("message-input")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
