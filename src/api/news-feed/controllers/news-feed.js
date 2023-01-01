'use strict';

/**
 * news-feed controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news-feed.news-feed');
