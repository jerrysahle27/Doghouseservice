const DEFAULT_PAGE_LIMIT = 2;
const DEFAULT_PAGE_NUMBER = 1;
function getPagination(query) {
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const page = Math.abs(query.pageNumber) || DEFAULT_PAGE_NUMBER;

  const pageNumber = (page - 1) * limit;
  return {
    pageNumber,
    limit,
  };
}


module.exports = {
  getPagination,
};
