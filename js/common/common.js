import { queryUrl } from './config.js';
import { trendUrl } from './config.js';
import { searchApiKey } from './config.js';
import { searchApiQ } from './config.js';
import { searchApiLimit } from './config.js';

export let searchUrl=`${queryUrl}q=${searchApiQ}&limit=${searchApiLimit}&api_key=${searchApiKey}&fmt=json'`;
export let seeTrendsUrl=`${trendUrl}&limit=${searchApiLimit}&api_key=${searchApiKey}&fmt=json'`;
