# Prompt Templates

You can open the prompt manger from the sidebar:

![prompt manager sidebar](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/iDZ3VZ.png)

In the manager you can create / edit / delete prompt templates.

## Placeholders

When creating the prompt, in prompt content, you can use placeholders to insert dynamic content. For example:

```
I want you to act as an essay writer.
Write an article about {{topic}} in a {{tone|Friendly,Sarcastic,Formal}} tone
```

The above prompt will render a form like this when the prompt is activated:

![prompt form](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/tZJess.png)

The placeholder syntax is `name|option1,option2` wrapped in double curly braces, the `|option1,option2` part is optional. If you don't provide options, the placeholder will be a text input, otherwise it will be a select input.

## Slash command

In the chat input, you can use `/` to select a prompt template:

<img src="https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/BpMxah.png" alt="slash command preview" class="border rounded-lg" />
