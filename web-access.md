# Web Access

Models with function calling capability or built-in web search capability can access the web and do web searches.

When web access is available for a model, ChatKit will show a button next to the model name. Clicking the button will toggle the web access on or off:

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/d30Rj2.png)

## How to use

Enabling web access means the model will do web searches when your query requires latest information or context from the web. For example, if you ask the model "What is the weather in New York?", the model will do a web search to find the latest weather information in New York:

![web search](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/7IWGoY.png)

## How does it work

We use model's function calling capability to access the web. The model will use DuckDuckGo search engine to do web searches and add the search results to the conversation. ChatKit will fetch the page content of each search result and include the content in the conversation, but only the first 3000 characters of the content will be used.

For models with built-in web search capability, like Cohere or Perplexity models, they works in a similar way but all actions are done within the model itself.
