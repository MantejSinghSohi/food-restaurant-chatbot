function toggleChatbot() {
    var chatbotContainer = document.querySelector('.chat-bot-container');
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "block";
    } else {
        chatbotContainer.style.display = "none";
    }
}
