/**
 * @swagger
 * tags:
 *  name: User
 *  descriptions: Managing User
 * /auth/login;
 *  post:
 *      summary: Login Process
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties: 
 *                       email:
 *                           example: user@gmail.com
 *                       password:
 *                           example: password
 *          responses:
 *              200:
 *                  description: Successfully Login
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      example: Successfully Login
 *                                  token:
 *                                      example: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMDEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjk3Mjk1MjgwLCJleHAiOjE2OTczODE2ODB9.ZoURADZSJuyTjZid6mQA_jEj4zJw5prKsC1Ui-bslLNK6v5i5Y3TDKhuQOvo1VMYT-DLlkyTx_3cg-LaCYKoE4vSpK602N9sMz4z0vS7W5KvmXEGVrash9wTtn9VTW8qIfIwFC7_snjHmu2jWtkeQ8YVESMuOaL0wcA9Albvrp_ZaHAQinMSZHc66HSjMvubdMdY6u9GWA1YtEX6x7AOkv0PmJiMklUXUf1F3NCm6s7taWGnK_0ZeEd0514eAMRA0KYfH_ft15RnFlOqJa6wjPb1btS1kl64njoFnsywB3yWbHSdph521vGfJ6_n3sHnCfEyEyY9AT9ckCtLj_4AAg
 *                       
 * 
 */