/**
 * @swagger
  * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *           example: user@example.com
 *         gender:
 *           type: string
 *           enum: [Male, Female, male, female]
 *           description: The gender of the user
 *           example: Male
 *         role:
 *           type: string
 *           description: The role of the user (e.g., Surveyor, Electrician, Engineer)
 *           example: Engineer
 *     Movie:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the movie
 *           example: Inception
 *         genres:
 *           type: string
 *           description: Genres of the movie
 *           example: Action|Adventure|Drama|Thriller|Western
 *         year:
 *           type: integer
 *           description: The release year of the movie
 *           example: 2010
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  responses:
 *    InvalidToken:
 *      description: Invalid Token
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Unauthorized - Invalid token
 *    MethodNotAllowed:
 *      description: HTTP Method yang dipakai tidak sesuai
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              status:
 *                type: integer
 *                example: 405
 *              message:
 *                type: string
 *                example: Method not allowed
 *              data:                    
 *                example: null
 *    InternalServerError:
 *      description: Internal Server Error
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Internal Server Error
 *    NotFound:
 *      description: Didn't find the resource
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Not Found
 *    PermissionDenied:
 *      description: Can't access the resource
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Forbidden - User does not have Administrator privileges`
 */