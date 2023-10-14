const { db } = require('../config');
const bcrypt = require('bcrypt');

const generateUpdateQuery = (updateData, values) => {
    const updateFields = Object.keys(updateData).map((field, index) => {
        if (field === 'password') {
            values.push(bcrypt.hashSync(updateData[field], 10));
            return `${field} = $${index + 1}`;
        } else {
            values.push(updateData[field]);
            return `${field} = $${index + 1}`;
        }
    });

    return updateFields.join(', ');
};

const getUserByEmail = async (email) => {
    const client = await db.pool.connect();
    try {
        const result = await client.query(`
            SELECT * FROM users WHERE email = $1
        `, [email]);
        return result.rows[0];
    } finally {
        client.release();
    }
};

const getAllUsers = async (params) => {
    const client = await db.pool.connect();
    try {
        const page = params.page || 1;
        const perPage = params.per_page || 10;
        const result = await client.query(`
            SELECT id, email, gender, role FROM users
            LIMIT ${perPage}
            OFFSET ${(page - 1) * perPage};
        `);
        return result.rows;
    } finally {
        client.release();
    }
};

const getUserById = async (Id) => {
    const client = await db.pool.connect();
    try {
        const result = await client.query(`
            SELECT id, email, gender, role FROM users
            WHERE id = $1
        `, [Id]);
        return result.rows;
    } finally {
        client.release();
    }
};

const createUser = async (UserData) => {
    const client = await db.pool.connect();
    try {
        const { email, gender, password, role } = UserData;
        const hashedPassword = await bcrypt.hash(password, 10);
        await client.query(`
            INSERT INTO users (email, gender, password, role) VALUES
            ($1, $2, $3, $4);
        `, [email, gender, hashedPassword, role]);
    } finally {
      client.release();
    }
};

const updateUserById = async (Id, updateData) => {
    const client = await db.pool.connect();
    try {
        const values = [];
        const updateQuery = generateUpdateQuery(updateData, values);
        const result = await client.query(`
            UPDATE users SET ${updateQuery} WHERE id = ${Id} RETURNING email;
        `, values);
        return result.rows[0];
    } finally {
        client.release();
    }
};

const deleteUserById = async (Id) => {
    const client = await db.pool.connect();
    try {
        const result = await client.query(`
            DELETE FROM users WHERE id = $1 RETURNING email;
        `, [Id]);
        return result.rows[0];
    } finally {
        client.release();
    }
};

module.exports = {
    getUserByEmail,
    getUserById,
    getAllUsers,
    createUser,
    updateUserById,
    deleteUserById
}




