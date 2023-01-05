'use strict';

/**
 * crewmember service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crewmember.crewmember');
