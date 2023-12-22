const addHistory = (chatHistory,chat,replyToken,eventCounts)=>{
    chatHistory.events.push(
        {
            eventCounts: eventCounts++,
            replyToken: replyToken,
            messages: chatHistory.push({role:"user",content: chat})
        }
    )    
}

module.exports = addHistory;