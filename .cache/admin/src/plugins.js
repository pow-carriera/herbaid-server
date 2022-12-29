
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import ckeditor from '../../../node_modules/@_sh/strapi-plugin-ckeditor/strapi-admin.js';
import documentation from '../../../node_modules/@strapi/plugin-documentation/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import entityRelationshipChart from '../../../node_modules/strapi-plugin-entity-relationship-chart/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'ckeditor': ckeditor,
  'documentation': documentation,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'entity-relationship-chart': entityRelationshipChart,
};

export default plugins;
