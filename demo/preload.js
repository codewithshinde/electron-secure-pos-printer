/*
 * Copyright (c) 2022. Author Wyatt Greenway <th317erd@gmail.com>
 */

"use strict";

const { contextBridge, ipcRenderer }  = require('electron');
const { setupSecureBridge }           = require('../src');

setupSecureBridge(contextBridge, ipcRenderer);
