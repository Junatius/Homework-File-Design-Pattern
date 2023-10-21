# Homework File & Design Pattern
Buatlah Restful API CRUD dengan menggunakan data [berikut](https://github.com/fathy17/modul-3-rakamin/blob/master/movies-database.sql).
1. Buatlah API untuk upload photo pada data movies
2. Terapkan design Pattern MVC + Repository pada code teman-teman


# Guide for JWS Token
1. Membuat file private.pem terlebih dahulu untuk signing token (Jika Windows maka run pada Git Bash)
```
openssl genpkey -algorithm RSA -out private.pem
```
2. Lalu untuk kedua menggunakan public.pem untuk memverifikasi token
```
openssl rsa -pubout -in private.pem -out public.pem
```
