require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'AutoScaling')) {
  apiLoader.services['autoscaling'] = {};
  AWS.AutoScaling = Service.defineService('autoscaling', ['2011-01-01']);

  apiLoader.services['autoscaling']['2011-01-01'] = require('../apis/autoscaling-2011-01-01.min');
  apiLoader.services['autoscaling']['2011-01-01'].paginators = require('../apis/autoscaling-2011-01-01.paginators').pagination;
}

module.exports = AWS.AutoScaling;
