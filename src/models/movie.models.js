const { db } = require('../config');

const generateUpdateQuery = (updateData, values) => {
    const updateFields = Object.keys(updateData).map((field, index) => {
      values.push(updateData[field]);
      return `${field} = $${index + 1}`;
    });
  
    return updateFields.join(', ');
};

const getAllMovies = async (params) => {
    const client = await db.pool.connect();
    try {
        const page = params.page || 1;
        const perPage = params.per_page || 10;
        const result = await client.query(`
            SELECT id, title, genres, year FROM movies
            LIMIT ${perPage}
            OFFSET ${(page - 1) * perPage};
        `);
        return result.rows;
    } finally {
        client.release();
    }
};

const createMovie = async (movieData) => {
    const client = await db.pool.connect();
    try {
        const { title, genres, year} = movieData;
        const result = await client.query(`
            INSERT INTO movies(title, genres, year) VALUES
            ($1, $2, $3) RETURNING *;
        `, [title, genres, year]);
        return result.rows;
    } finally {
      client.release();
    }
};

const updateMovieById = async (Id, updateData) => {
    const client = await db.pool.connect();
    try {
        const values = [];
        const updateQuery = generateUpdateQuery(updateData, values);
        const result = await client.query(`
            UPDATE movies SET ${updateQuery} WHERE id = ${Id} RETURNING title;
        `, values);
        return result.rows;
    } finally {
        client.release();
    }
};

const deleteMovieById = async (Id) => {
    const client = await db.pool.connect();
    try {
        const result = await client.query(`
            DELETE FROM movies WHERE id = ${Id} RETURNING title;
        `);
        return result.rows;
    } finally {
        client.release();
    }
};

module.exports = {
    getAllMovies,
    createMovie,
    updateMovieById,
    deleteMovieById
}

