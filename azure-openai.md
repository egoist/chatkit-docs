# Azure OpenAI

We support a set of OpenAI models deployed on Microsoft Azure. They are available in the model list:

![azure openai models](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/PqTfGs.png)

## Deploy a model on Azure OpenAI

We map each model to a deployment on Azure OpenAI by their deployment name:

| model               | deployment name |
| ------------------- | --------------- |
| Azure GPT-3.5 Turbo | gpt-35-turbo    |
| Azure GPT-4 Turbo   | gpt-4-turbo     |
| Azure GPT-4 Vision  | gpt-4-vision    |

For instance, if you want to use `Azure GPT-3.5 Turbo` on ChatKit, you need to create a deployment with the name `gpt-35-turbo` on Azure OpenAI:

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/7AvL1y.png)

## Setup

To use Azure OpenAI, you need to configure your deployment endpoint and api key:

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/YdUFeO.png)

To view your deployment endpoint and api key, you can go to the [Azure OpenAI portal](https://oai.azure.com/), the endpoint looks like `https://resource-name.openai.azure.com`:

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/9ZG6su.png)
