# OpenAI Proxy

If you can't access the OpenAI API directly (due to firewall or other issues), you can use our OpenAI Proxy to access the API:

```
https://openai-proxy.chatkit.app
```

![set proxy in settings](https://fastly.jsdelivr.net/gh/egoist-bot/images@main/uPic/LuXbfz.png)

::: warning
Using a proxy is potentially against OpenAI's Terms of Service, use at your own risk.
:::

This service is deployed on [Cloudflare Workers](https://workers.cloudflare.com/), you can check out the source code and deploy it on your own Cloudflare account if you want: https://github.com/egoist/openai-proxy
