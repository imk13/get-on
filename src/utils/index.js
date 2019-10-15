const PAGE_LIMIT = 10;
const DEFAULT_PAGE = 0;
exports.getPagination = function(options) {
	var pageOptions = {
		page: options.page || DEFAULT_PAGE,
		limit: options.limit || PAGE_LIMIT
	}
	return pageOptions;
};
