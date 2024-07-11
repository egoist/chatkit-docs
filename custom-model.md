# Custom Model

ChatKit supports custom models besides OpenAI models, as long as your custom model can be accessed from a URL that is compatible with [OpenAI's chat completion API](https://platform.openai.com/docs/api-reference/chat).

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/ALuz37.png)

You can see a new form after clicking the "+ Custom model" button:

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/KXJIiM.png)

- **Name**: Used to easily identify the model in the model list.
- **Model**: Use as the `model` property in the request body.
- **URL**: The API endpoint, we send POST request to this URL.
  - Proxy: send requests from our server instead of the browser, useful when the API doesn't support [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
- **Context limit**: Maxium context token limit. For example, Llama 2 has a context window of 4096 tokens. Your API provider usually shows this in the their documentation.
- **API key**: The API key/token to authenticate your request.
- **Headers**: Extra HTTP headers we send to the URL.
- **Stream**: Whether your custom model API can stream AI responses.

## Notes

When a custom model is selected, it's also used to generate sugguested questions and chat titles.
