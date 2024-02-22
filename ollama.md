# Ollama

[Ollama](https://ollama.com/) is a CLI tool for installing and running large language models locally.

## Pulling a model

If you haven't already, you can pull a model on your local machine using the following command:

```bash
ollama pull mistral
```

Check out available models [here](https://ollama.com/library).

## Enabling Ollama on ChatKit

When using our web app (i.e. https://chatkit.app), first you need to it to access your local Ollama API, here's how you can do it on macOS:

```bash
launchctl setenv OLLAMA_ORIGINS https://chatkit.app
# then restart ollama
```

**This step is not required if you are using ChatKit desktop app.** Check out [this official guide](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server) for how to set `OLLAMA_ORIGINS` environment variable on Windows and Linux instructions.

Now ChatKit can access Ollama models, but they won't be shown on ChatKit by default, you can enable it in App Settings -> Models:

![App Settings -> Models](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/chnVxS.png)

## Selecting a Ollama model

When it's enabled, Ollama models will be available in the model list on ChatKit:

![Model list](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/wQlJMp.png)

## Limitations

Currently all Ollama models will show a context limit of 8K tokens, but it doesn't reflect the actual limit of the model.
