#!/usr/bin/env node
import { brainPrimeLogic, brainPrimeRules } from '../games-logic/brain-prime-logic.js';
import { generalLogic } from '../src/index.js';

generalLogic(brainPrimeRules, brainPrimeLogic);
