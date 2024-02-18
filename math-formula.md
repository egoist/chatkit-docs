# Math Formula

Math formulas in messages are rendered by default, however you can turn it off in App Settings. ChatKit can render math formulas wrapped in the following delimiters:

- `$$`
- `\(` and `\)`
- `\[` and `\]`

Single dollar sign `$` is not supported because it's easy to conflict with its literal usage in messages, for example, `$100` is a common way to represent money, if we support single dollar sign for math, `$100 $200` will be rendered as a math expression: `$100 $`.

Sometimes some models will use `$` for inline math, in this case, you can use a system message to explicitly tell the model to use `\(` and `\)` as the delimiter:

```
Use \( and \) instead of dollar sign for math formulas.
```

## Preview

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/C76Y0s.png)
