# Custom Model

ChatKit supports custom models besides OpenAI models, as long as your custom model can be accessed from a URL that is compatible with [OpenAI's chat completion API](https://platform.openai.com/docs/api-reference/chat).

![](https://fastly.jsdelivr.net/gh/egoist-bot/images@main/uPic/AFTqT5.png)

You can see a new form after clicking the "+ Custom model" button:

![](https://fastly.jsdelivr.net/gh/egoist-bot/images@main/uPic/P9GiAR.png)

- **Name**: Used to easily identify the model in the model list.
- **Model**: Use as the `model` property in the request body.
- **URL**: The API endpoint, we send POST request to this URL.
- **Context limit**: Maxium context token limit. For example, Llama 2 has a context window of 4096 tokens. Your API provider usually shows this in the their documentation.
- **Headers**: Extra HTTP headers we send to the URL.
  - Usually you need to add `Authorization` header to authenticate your request, with the value being `Bearer <api-key>` where `<api-key>` is the API key/token from the service you're using.
- **Stream**: Whether your custom model API can stream AI responses.

## Notes

When a custom model is selected, it's also used to generate sugguested questions and chat titles.
