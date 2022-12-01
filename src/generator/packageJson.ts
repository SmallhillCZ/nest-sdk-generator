/**
 * @file Generate package.json file for the SDK
 */

import { SdkContent } from '../analyzer'
import { config } from '../config'

export function generatePackageJson(sdkContent: SdkContent): string {
  const packageJson = {
    name: config.name || 'nest-sdk',
    version: sdkContent.version,
    peerDependencies: config.peerDependencies,
  }

  const out = JSON.stringify(packageJson)

  return out
}
