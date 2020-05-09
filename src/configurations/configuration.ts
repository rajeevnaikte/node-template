import * as defaultConfigs from './configs.json';
import { loadConfigs } from 'squid-utils';

export const Config = loadConfigs(defaultConfigs);
