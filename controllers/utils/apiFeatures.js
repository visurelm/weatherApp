class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  // SORT todos by createdAt
  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(',').join(' ');
      this.query = this.query(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }
}

module.exports = APIFeatures;
