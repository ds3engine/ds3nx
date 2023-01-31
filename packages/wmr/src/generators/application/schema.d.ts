import { Linter } from '@nrwl/linter';

export interface WmrAppGeneratorSchema {
  name: string;
  tags?: string;
  prefix?: string;
  directory?: string;

  compiler?: 'swc' | 'babel';
  bundler?: 'rollup' | 'none';
  linter?: Linter;
  strict?: boolean;
  skipFormat?: boolean;
  unitTestRunner?: 'jest' | 'none';
  e2eTestRunner?: 'playwright' | 'none';
  setParserOptionsProject?: boolean;
  standaloneConfig?: boolean;
  style?: 'css' | 'scss' | 'none';
}

export interface WmrAppNormalizedSchema extends WmrAppGeneratorSchema {
  projectName: string;
  appProjectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  offsetFromRoot: string;
  rootTsConfigPath: string;
  setupJest: boolean;
  styleExtension: Exclude<WmrAppGeneratorSchema['style'], 'none'> | null;
  e2eProjectName: string;
}
