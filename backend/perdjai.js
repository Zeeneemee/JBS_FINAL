const axios = require("axios")
const parsedEvent = require("./utils/parser");
const optionsData = require('./picture.json');
let useroption = false;
const env = require("./env")
const chatBot = require("./utils/generateResponse");
const summary = require("./utils/summary");
const addHistory = require('./utils/addHistory')
const searchChat = require('./utils/SearchChat');
const { default: events } = require("inquirer/lib/utils/events");
const chatHistory = [{
    userId: userID, // user id
    events: [
        {
            eventCounts: 1,
            replyToken: event.replyToken,
            messages: [{
                role: "system",
                content: "You are a professional life coach and mentor, who's very fluent in Thai language. You have 20 years of experience helping people to express and reflect their emotions with goal to make them understand their feelings. You are a skilled active listener.  You are making your reflect themselves and recall their actions in the situation no matter it's right or wrong. You acknowledge your clients' emotions and accountable for their action. You will asking one question at a time in Thai language. Once the client wants to stop, you will analyze their action and current emotion. For every interaction, ask me any question that will help you provide a more effective and personalized answer."
            }]
        },
    ]
}
]


const lineConfig = {
    channelAccessToken: env.ACCESS_TOKEN,
    channelSecret: env.SECRET_TOKEN
}

const Constant = {
    LINE_REPLY_ENDPOINT: "https://api.line.me/v2/bot/message/reply",
    LINE_HEADER: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${lineConfig.channelAccessToken}`,
    }
}

const getEmotion=(option)=>{    
    isOption ? optionMapper[option] : 'Unknown';
    return optionMapper[option]
}

const isOption = (text) => {

    return Object.keys(optionMapper).includes(text);
}

const optionMapper = {
    'Option 1': 'โกรธ',
    'Option 2': 'อารมณ์ดี',
    'Option 3': 'เหงา',
    'Option 4': 'เศร้า',
    'Option 5': 'เครียด',
}  

const replyText = async (replyToken, message, options = []) => {
    const body = {
        replyToken: replyToken,
        messages: [
            {
                type: 'text',
                text: message,
            },
            ...(options.length > 0 ? [{
                type: 'text',
                text: options.join('\n'),
            }] : []),
        ],
    };
    try {
        await axios.post(Constant.LINE_REPLY_ENDPOINT, body, { headers: Constant.LINE_HEADER });
    } catch (error) {
        console.error('Error sending LINE reply:', error.response ? error.response.data : error.message);
    }
};

const handleUserChoice = async (replyToken, option) => {
    Emotion = "คุณรู้สึก" + getEmotion(option)
    return Emotion
};

const randomImage = (images) =>{
    const randomIndex = Math.floor(Math.random()*images.length);
    return images[randomIndex];
}

const replyCardOptions = async (replyToken, optionsData) => {

    const columns = optionsData.map(option => {
        return {
            thumbnailImageUrl: randomImage(option.image_url),
            title: option.option,
            text: 'Choose one option that represent how you feel',
            actions: [
                {
                    type: 'message',
                    label: option.option,
                    text: option.option,
                },
            ],
        };
    });
    const body = {
        replyToken: replyToken,
        messages: [
            {
                type: 'template',
                altText: 'Choose an option:',
                template: {
                    type: 'carousel',
                    columns: columns,
                },
            },
        ],
    };
    try {
        await axios.post(Constant.LINE_REPLY_ENDPOINT, body, { headers: Constant.LINE_HEADER });
    } catch (error) {
        console.error('Error sending LINE reply:', error.response ? error.response.data : error.message);
    }
};


const handleWebhook = async (req, res) => {
    try {
      // TODO: handle Line forward messages

      const { event, isStarted } = parsedEvent(req.body.events[0]);

      if (isStarted === true) {
        replyCardOptions(event.replyToken, optionsData);
        // chatHistory[event.userID] = [event.text];
        chatHistory.push({
            userId: event.userID, // user id
            events: [
                {
                    eventCounts: 1,
                    replyToken: event.replyToken,
                    messages: [{
                        role: "system",
                        content: "You are a professional life coach and mentor, who's very fluent in Thai language. You have 20 years of experience helping people to express and reflect their emotions with goal to make them understand their feelings. You are a skilled active listener.  You are making your reflect themselves and recall their actions in the situation no matter it's right or wrong. You acknowledge your clients' emotions and accountable for their action. You will asking one question at a time in Thai language. Once the client wants to stop, you will analyze their action and current emotion. For every interaction, ask me any question that will help you provide a more effective and personalized answer."
                    }]
                },
            ]
        },

    )

        return;
      }else if (['Option 1', 'Option 2', 'Option 3','Option 4','Option 5'].includes(event.text)) {
        const emotion = await handleUserChoice(event.replyToken, event.text);
        const userChat =  searchChat(chatHistory,event.userID)
        userChat.events[0].messages.push({role:"user", content: emotion});
        useroption = true;
        return;
      } else if (!isStarted && useroption){
        handleUserChoice(event.replyToken, event.text);
      }
    const userMessage = event.text;
    const userReplyToken = event.replyToken
    
    const userChat =  searchChat(chatHistory,event.userID) //return obj of that userId
    const eventCount = userChat.events[events.length - 1].eventCounts
    addHistory(userChat,userMessage,userReplyToken,eventCount)
    const histroyMessage = userChat.events.array.map(event => {
       return (event.messages)
    });
    const { chat, assistantMessage } = await chatBot(histroyMessage, userMessage); // pass in chatHistory with event[0].message of the userID

    

    
    } catch (error) {
      console.error(error)
      res.status(500).end();
    }
};

module.exports = handleWebhook;
