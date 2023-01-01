'use strict';

/**
 * news-feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-feed.news-feed');
