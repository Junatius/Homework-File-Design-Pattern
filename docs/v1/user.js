/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations related to users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Getting all user data
 *     tags: [Users]
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
 *                 email: "oainger0@craigslist.org"
 *                 gender: "Female"
 *                 role: "Construction Worker"
 *               - id: 4
 *                 email: "agreenan3@barnesandnoble.com"
 *                 gender: "Female"
 *                 role: "Electrician"
 *               - id: 5
 *                 email: "sthirst4@blog.com"
 *                 gender: "Male"
 *                 role: "Construction Foreman"
 *               - id: 6
 *                 email: "loak5@nifty.com"
 *                 gender: "Female"
 *                 role: "Estimator"
 *               - id: 7
 *                 email: "ebroadey6@guardian.co.uk"
 *                 gender: "Male"
 *                 role: "Subcontractor"
 *               - id: 8
 *                 email: "dtoupe7@surveymonkey.com"
 *                 gender: "Female"
 *                 role: "Engineer"
 *               - id: 9
 *                 email: "jborsnall8@mediafire.com"
 *                 gender: "Male"
 *                 role: "Surveyor"
 *               - id: 10
 *                 email: "cbogace9@jigsy.com"
 *                 gender: "Male"
 *                 role: "Construction Worker"
 *               - id: 11
 *                 email: "ibradnecka@clickbank.net"
 *                 gender: "Female"
 *                 role: "Estimator"
 *               - id: 12
 *                 email: "dwoodrooffeb@purevolume.com"
 *                 gender: "Female"
 *                 role: "Supervisor"
 *       401:
 *         $ref: '#/components/responses/InvalidToken'
 *       403:
 *         $ref: '#/components/responses/PermissionDenied'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /users/edit/{id}:
 *   put:
 *     summary: Update user by ID
 *     description: Update user information by providing user ID.
 *     tags: [Users]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "User with email hblything1@de.vu updated successfully"
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *              message: No Input data provided                          
 *       401:
 *         $ref: '#/components/responses/InvalidToken'
 *       403:
 *         $ref: '#/components/responses/PermissionDenied'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete the user
 *     tags: [Users]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "User with email hblything1@de.vu deleted successfully"                        
 *       401:
 *         $ref: '#/components/responses/InvalidToken'
 *       403:
 *         $ref: '#/components/responses/PermissionDenied'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
*/

