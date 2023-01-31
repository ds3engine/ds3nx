## Examples

{% tabs %}
{% tab label="Simple Application" %}

Create an application named `my-app`:

```bash
nx g @ds3nx/wmr:application my-app
```

{% /tab %}

{% tab label="Application using Vite as bundler" %}

Create an application named `my-app`:

```bash
nx g @ds3nx/wmr:app my-app --bundler=vite
```

{% /tab %}

{% tab label="Specify directory" %}

Create an application named `my-app` in the `my-dir` directory:

```bash
nx g @ds3nx/wmr:app my-app --directory=my-dir
```

{% /tab %}

{% tab label="Add tags" %}

Add tags to the application (used for linting).

```bash
nx g @ds3nx/wmr:app my-app --tags=scope:admin,type:ui
```

{% /tab %}
{% /tabs %}
