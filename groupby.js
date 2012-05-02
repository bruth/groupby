
define(['underscore'], function(_) {
  var sortedGroupBy;
  sortedGroupBy = function(list, groupBy, sortBy) {
    var groupByIter, groups, sortByIter;
    if (_.isArray(groupBy)) {
      groupByIter = function(obj) {
        return _.map(groupBy, function(key, value) {
          return obj[key];
        });
      };
    } else {
      groupByIter = groupBy;
    }
    if (_.isArray(sortBy)) {
      sortByIter = function(obj) {
        return _.map(sortBy, function(key, value) {
          return obj[key];
        });
      };
    } else {
      sortByIter = sortBy;
    }
    groups = _.groupBy(list, groupBy);
    if (sortByIter) {
      _.each(groups, function(value, key, list) {
        return list[key] = _.sortBy(value, sortByIter);
      });
    }
    return groups;
  };
  return {
    sortedGroupBy: sortedGroupBy
  };
});
