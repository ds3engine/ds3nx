# Design System 3 | Nx Docs

- [Preact Docs](https://preactjs.com/)
- [WMR Docs](https://wmr.dev/docs/)
- [Rollup Docs](https://rollupjs.org/)

---

## Project Structure

This project is using WMR. WMR is just a extra set of tools on top of Preact to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── Pages
└── wmr.config.mjs
```

## Development

```shell
pnpm start
```

## Preview

The preview command will create a production build of the client modules, a production build and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
pnpm preview
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
pnpm build
```
