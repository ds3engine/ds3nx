<p align="center">
  <br/>
  <img width="150" src="https://github.com/ds3engine.png" alt="Design System 3 Logo">
  <br/>
  <br/>
</p>

<h1 align='center'>Design System 3 | Nx Plugins</h1>

<div align='center'>
  The <a href='https://nx.dev/'>Nx</a> plugins for <a href='https://github.com/ds3engine'>Design System 3</a>
  <br><br>

[![stability-wip](https://img.shields.io/badge/stability-wip-lightgrey.svg)](https://github.com/mkenney/software-guides/blob/master/STABILITY-BADGES.md#work-in-progress)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![CI](https://img.shields.io/github/actions/workflow/status/ds3engine/ds3nx/ci.yml?label=CI&style=flat-square)](https://github.com/ds3engine/ds3nx/actions/workflows/ci.yml)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/ds3engine/ds3nx?style=flat-square)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)]()
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square)](CODE_OF_CONDUCT.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Star on GitHub](https://img.shields.io/github/stars/ds3engine/ds3nx.svg?style=social)](https://github.com/ds3engine/ds3nx/stargazers)

</div>

<h2 align='center'>WARNING: Code is a "work in progress" and is not ready for public use!</h2>

<br/>

## Available plugins

| 🔌 Plugin                                                                                                                         | 📦 Package                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://github.com/ds3engine/ds3nx/tree/main/packages/wmr"><img src="https://wmr.dev/assets/wmr.svg" width="48"> WMR</a> | [![@ds3nx/wmr](https://img.shields.io/npm/v/@ds3nx/wmr?label=%40ds3nx%2Fwmr&logo=nx)](https://www.npmjs.com/package/@ds3nx/wmr) |

<br/>

## install

```
npm install -D ds3nx
```

## Usage

### Generating a workspace

```
npx create-nx-workspace org-workspace --preset=ds3nx
```

### Generating an application

```
nx generate ds3nx:app
```

### Generating an library

```
nx generate ds3nx:lib
```

### Generating a component

```
nx generate ds3nx:component
```

## Roadmap:

- [ ] Complete generators for Route, Component and more
- [ ] Complete `add-nx-to-wmr` and `create-wmr-nx`
- [ ] Write missing tests
- [ ] Move package.json scripts to project.json targets
- [ ] more...

<br/>

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**. Feel free to dive in and open an [new issue](https://github.com/ds3engine/nx/issues/new/choose) or submit a [Pull Request](https://github.com/ds3engine/nx/compare?expand=1).

Read our [CONTRIBUTING](CONTRIBUTING.md) guide to get started.

## Code of conduct

Design System 3 is dedicated to providing a welcoming, diverse, and harrassment-free experience for everyone. We expect everyone in the NxKit community to abide by our [**Code of Conduct**](CODE_OF_CONDUCT.md). Please read it.

## Maintainers

[@uxtechie](https://github.com/uxtechie)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/julianmulet/"><img src="https://avatars.githubusercontent.com/u/8160869?v=4?s=100" width="100px;" alt="Julián Mulet"/><br /><sub><b>Julián Mulet</b></sub></a><br /><a href="https://github.com/ds3engine/nx/commits?author=untechie" title="Code">💻</a> <a href="#tool-untechie" title="Tools">🔧</a> <a href="https://github.com/ds3engine/nx/pulls?q=is%3Apr+reviewed-by%3Auntechie" title="Reviewed Pull Requests">👀</a> <a href="#ideas-untechie" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-untechie" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-untechie" title="Maintenance">🚧</a> <a href="#projectManagement-untechie" title="Project Management">📆</a> <a href="https://github.com/ds3engine/nx/commits?author=untechie" title="Documentation">📖</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Related Links

- [Nx](https://nx.dev/)
- [Design System 3](https://github.com/ds3engine/ds3)

## License

This project is licensed under the **MIT License**.

See [**LICENSE**](LICENSE) for more information.

### Acknowledgments:

- Scaffold based on [NxKit](https://github.com/nxkit) project.

- Code based on official [@nrwl/react](https://www.npmjs.com/package/@nrwl/react) npm package.
