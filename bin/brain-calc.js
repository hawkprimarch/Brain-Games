#!/usr/bin/env node
import { brainCalcLogic, brainCalcRules } from '../games-logic/brain-calc-logic.js';
import { generalLogic } from '../src/index.js';

generalLogic(brainCalcRules, brainCalcLogic);
