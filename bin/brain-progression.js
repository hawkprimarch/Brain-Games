#!/usr/bin/env node
import { brainProgressionLogic, brainProgressionRules } from '../games-logic/brain-progression-logic.js';
import { generalLogic } from '../src/index.js';

generalLogic(brainProgressionRules, brainProgressionLogic);
