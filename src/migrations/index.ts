import * as migration_20250516_090223 from './20250516_090223';
import * as migration_20250516_090245_seed from './20250516_090245_seed';

export const migrations = [
  {
    up: migration_20250516_090223.up,
    down: migration_20250516_090223.down,
    name: '20250516_090223',
  },
  {
    up: migration_20250516_090245_seed.up,
    down: migration_20250516_090245_seed.down,
    name: '20250516_090245_seed'
  },
];
