const { dataSource } = require('./dataSource');

const createBookList = async (
  title,
  subtitle,
  author,
  issueDate,
  description,
  thumbnail,
  price,
  quantity,
  subCategoryId,
  isSubscribe
) => {
  try {
    return await dataSource.query(
      `INSERT INTO books (
        title,
        subtitle,
        author,
        issue_date,
        description,
        thumbnail,
        price,
        quantity,
        sub_category_id,
        is_subscribe
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )`,
      [
        title,
        subtitle,
        author,
        issueDate,
        description,
        thumbnail,
        price,
        quantity,
        subCategoryId,
        isSubscribe,
      ]
    );
  } catch (error) {
    error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const getBookList = async (
  categoryId,
  subCategoryId,
  orderBy,
  limit,
  offset
) => {
  try {
    const baseQuery = `SELECT DISTINCT b.id, b.title, b.subtitle, b.thumbnail, b.price, b.created_at, (SELECT COUNT(*) FROM likes l WHERE l.book_id = b.id ) best
      FROM books b
      JOIN sub_categories sc ON b.sub_category_id = sc.id
      JOIN categories c ON c.id = sc.category_id`;
    const whereConidtion = getFiltering(categoryId, subCategoryId);
    const sortQuery = getOrdering(orderBy);
    const limitQuery = getLimit(limit, offset);
    const result = await dataSource.query(
      baseQuery + ' ' + whereConidtion + ' ' + sortQuery + ' ' + limitQuery
    );
    return result;
  } catch (error) {
    console.log(error);
    error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const getFiltering = (categoryId, subCategoryId) => {
  const conditionArr = [];
  let whereConidtion = '';

  if (categoryId) conditionArr.push(`c.id = ${categoryId}`);
  if (subCategoryId) conditionArr.push(`b.sub_category_id = ${subCategoryId}`);
  if (!!conditionArr.length) {
    whereConidtion = 'WHERE' + ' ' + conditionArr.join(' AND ');
    return whereConidtion;
  }
  return whereConidtion;
};

const getOrdering = (orderBy) => {
  switch (orderBy) {
    case 'bestBooks':
      result = 'ORDER BY best DESC';
      break;
    case 'newBooks':
      result = 'ORDER BY created_at DESC';
      break;
    case 'priceAsc':
      result = 'ORDER BY price ASC';
      break;
    case 'priceDesc':
      result = 'ORDER BY price DESC';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

const getLimit = (limit, offset) => {
  let result = `LIMIT ${limit} OFFSET ${offset}`;
  if (!limit || !offset) result = ';';
  return result;
};

module.exports = {
  createBookList,
  getBookList,
};
