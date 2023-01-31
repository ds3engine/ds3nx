import {
  addDependenciesToPackageJson,
  GeneratorCallback,
  Tree,
} from '@nrwl/devkit';
import { wmrVersion, preactVersion } from './versions';

export function addCommonWmrDependencies(host: Tree): GeneratorCallback {
  return addDependenciesToPackageJson(
    host,
    {},
    {
      wmr: wmrVersion,
      preact: preactVersion,
      // TODO: dependencies below should be setup correctly by Nx's generator, so not needed to provide them here?
      // "@types/eslint": typesEslint,
      // '@types/node': 'latest',
      // "@typescript-eslint/eslint-plugin": tsEslintVersion,
      // "@typescript-eslint/parser": tsEslintVersion,
      // "eslint": eslintVersion,
      // "eslint-plugin-qwik": qwikEslintPluginVersion,
      // "prettier": prettierVersion,
      // "typescript": typescriptVersion,
    }
  );
}
