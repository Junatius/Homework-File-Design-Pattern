/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API operations related to Movies
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     description: Getting all movie data
 *     tags: [Movies]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 title: "Reckless"
 *                 genres: "Comedy|Drama|Romance"
 *                 year: "2001"
 *               - id: 2
 *                 title: "When a Man Loves a Woman"
 *                 genres: "Drama|Romance"
 *                 year: "1995"
 *               - id: 3
 *                 title: "Creature"
 *                 genres: "Documentary"
 *                 year: "1997"
 *               - id: 4
 *                 title: "Sex and Zen (Rou pu Tuan zhi tou Qing bao Jian)"
 *                 genres: "Action|Adventure|Comedy|Fantasy"
 *                 year: "2007"
 *               - id: 6
 *                 title: "The Magical Legend of the Leprechauns"
 *                 genres: "Adventure|Children|Comedy|Fantasy|Romance"
 *                 year: "2010"
 *               - id: 7
 *                 title: "Marilena de la P7"
 *                 genres: "Drama|Fantasy"
 *                 year: "1984"
 *               - id: 8
 *                 title: "Battle of Algiers, The (La battaglia di Algeri)"
 *                 genres: "Drama|War"
 *                 year: "2012"
 *               - id: 9
 *                 title: "Winning of Barbara Worth, The"
 *                 genres: "Drama|Romance|Western"
 *                 year: "2009"
 *               - id: 10
 *                 title: "Beijing Taxi"
 *                 genres: "Documentary"
 *                 year: "1993"
 *               - id: 11
 *                 title: "Pleasure at Her Majesty's"
 *                 genres: "Comedy|Documentary"
 *                 year: "2009"
 *       401:
 *         $ref: '#/components/responses/InvalidToken'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /movies/edit/{id}:
 *   put:
 *     summary: Update movie by ID
 *     description: Update movie information by providing movie ID.
 *     tags: [Movies]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the movie to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '200':
 *         description: Movie updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Movie with title Inception updated successfully"
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               message: "No Input data provided"
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /movies/create:
 *   post:
 *     summary: Create a new movie
 *     description: Create a new movie with the provided title, genres, and year.
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '200':
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Successfully Created"
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               message: "Title is Required"
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /movies/delete/{id}:
 *   delete:
 *     summary: Delete movie by ID
 *     description: Delete a movie by providing the movie ID.
 *     tags: [Movies]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the movie to delete
 *     responses:
 *       '200':
 *         description: Movie deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Movie Inception deleted successfully"
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
