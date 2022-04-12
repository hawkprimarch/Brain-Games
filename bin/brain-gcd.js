#!/usr/bin/env node
import { brainGcdLogic, brainGcdRules } from '../games-logic/brain-gcd-logic.js';
import { generalLogic } from '../src/index.js';

generalLogic(brainGcdRules, brainGcdLogic);
