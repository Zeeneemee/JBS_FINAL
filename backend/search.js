const searchChat = (chatHistory,userID) => {
    const userChat = chatHistory.find(chat => chat.userId === userID);
    if (userChat) {
        return userChat;
    }
}

module.exports = searchChat;