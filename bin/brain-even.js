#!/usr/bin/env node
import { brainEvenLogic, brainEvenRules } from '../games-logic/brain-even-logic.js';
import { generalLogic } from '../src/index.js';

generalLogic(brainEvenRules, brainEvenLogic);
