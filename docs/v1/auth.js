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
 * /auth/login:
 *   post:
 *     summary: Login Process
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 example: user@gmail.com
 *               password:
 *                 example: password
 *     responses:
 *       200:
 *         description: Successfully Login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   example: Successfully Login
 *                 token:
 *                   example: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMDEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjk3Mjk1MjgwLCJleHAiOjE2OTczODE2ODB9.ZoURADZSJuyTjZid6mQA_jEj4zJw5prKsC1Ui-bslLNK6v5i5Y3TDKhuQOvo1VMYT-DLlkyTx_3cg-LaCYKoE4vSpK602N9sMz4z0vS7W5KvmXEGVrash9wTtn9VTW8qIfIwFC7_snjHmu2jWtkeQ8YVESMuOaL0wcA9Albvrp_ZaHAQinMSZHc66HSjMvubdMdY6u9GWA1YtEX6x7AOkv0PmJiMklUXUf1F3NCm6s7taWGnK_0ZeEd0514eAMRA0KYfH_ft15RnFlOqJa6wjPb1btS1kl64njoFnsywB3yWbHSdph521vGfJ6_n3sHnCfEyEyY9AT9ckCtLj_4AAg
 *       400:
 *         description: Incomplete Request Body 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   example: Email is Required
 *       401:
 *         description: Invalid Email or Password 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   example: Invalid Email or Password
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registering new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 example: user@gmail.com
 *               gender:
 *                 example: Male
 *               password:
 *                 example: password
 *               role:
 *                 example: Engineer
 *     responses:
 *       200:
 *         description: Successfully Registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   example: Successfully Registered
 *       400:
 *         description: User Already Exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   example: User already exist
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout Process
 *     tags: [Users]
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully Logout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   example: Logout successful
 *                 token:
 *                   example: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMDEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjk3MzI1NzA4LCJleHAiOjE2OTczMjU3MDh9.RzvVF4CfEEUqp4YKDiPdLWDcmzzfmG5dTlgER8g7DrsqnCq59HiBSJTNOOELXx6r_25msN6aWffW1sUcEfrecPNvJovNeyW9lX8eGmHU9U7AWzRR5yRZDZlMABggh2xHN2AVWNxHCNUSOheUcZEdyHc0cyRR2vfq4L_DQVCTVWJHw1hwspz7AOAoih2u8Ai0yxZx0V1QLhwMDTE2TBziLLH0k6oSgNe2zDkZYJgIEukt6x2zUB-6o3TsvOqGgmc3exs17i5Th7CePHaQ1LG5d7HjEJUgkktp3QxGqqQlUkkQOXaBiWrJ2PHnX2nJH0YgfcObgw3vqwQgWXIRpukHiQ
 *       401:
 *         $ref: '#/components/responses/InvalidToken'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout Process
 *     tags: [Users]
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully Logout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   example: Logout successful
 *                 token:
 *                   example: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMDEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjk3MzI1NzA4LCJleHAiOjE2OTczMjU3MDh9.RzvVF4CfEEUqp4YKDiPdLWDcmzzfmG5dTlgER8g7DrsqnCq59HiBSJTNOOELXx6r_25msN6aWffW1sUcEfrecPNvJovNeyW9lX8eGmHU9U7AWzRR5yRZDZlMABggh2xHN2AVWNxHCNUSOheUcZEdyHc0cyRR2vfq4L_DQVCTVWJHw1hwspz7AOAoih2u8Ai0yxZx0V1QLhwMDTE2TBziLLH0k6oSgNe2zDkZYJgIEukt6x2zUB-6o3TsvOqGgmc3exs17i5Th7CePHaQ1LG5d7HjEJUgkktp3QxGqqQlUkkQOXaBiWrJ2PHnX2nJH0YgfcObgw3vqwQgWXIRpukHiQ
 *       401:
 *         $ref: '#/components/responses/InvalidToken'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */