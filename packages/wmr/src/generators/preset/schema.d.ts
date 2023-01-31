import { Linter } from '@nrwl/linter';
export interface WmrWorkspacePresetGeneratorSchema
  extends WmrAppGeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;

  style: 'css' | 'scss' | 'none';
  linter: Linter;
  skipFormat: boolean;
  strict: boolean;
  unitTestRunner: 'jest' | 'none';
  e2eTestRunner: 'playwright' | 'cypress' | 'none';
}
