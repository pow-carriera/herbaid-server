'use strict';

/**
 * docregion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::docregion.docregion');
