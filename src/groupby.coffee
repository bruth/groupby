define ['underscore'], (_) ->

    sortedGroupBy = (list, groupBy, sortBy) ->
        if _.isArray(groupBy)
            groupByIter = (obj) ->
                _.map groupBy, (key, value) -> obj[key]
        else
            groupByIter = groupBy

        if _.isArray(sortBy)
            sortByIter = (obj) ->
                _.map sortBy, (key, value) -> obj[key]
        else
            sortByIter = sortBy

        groups = _.groupBy(list, groupBy)

        if sortByIter
            _.each groups, (value, key, list) ->
                list[key] = _.sortBy value, sortByIter

        return groups

    { sortedGroupBy }
