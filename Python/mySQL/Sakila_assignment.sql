USE sakila;

SELECT city.city_id , city.city, customer.first_name, customer. last_name, customer.email, address.address
FROM customer
JOIN address ON address.address_id = customer.address_id
JOIN city ON city.city_id = address.city_id
WHERE city.city_id = 312;

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre 
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name LIKE 'Comedy';

SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name, film.title, film.description, film.release_year
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.actor_id=5;

SELECT store.store_id, city.city_id, customer.first_name, customer.last_name, customer.email, address.address
FROM city
JOIN address ON city.city_id=address.city_id
JOIN customer ON address.address_id=customer.address_id
JOIN store ON  store.store_id=customer.store_id
WHERE store.store_id=1 AND city.city_id IN (1, 42, 312, 459);

SELECT title, description, release_year, rating, special_features
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.actor_id=15
AND rating='G'
AND special_features LIKE '%Behind the Scenes%';

SELECT film.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name,  actor.last_update
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE film.film_id=369;

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre, film.rental_rate
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name LIKE 'Drama'
AND film.rental_rate=2.99;

SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name,  film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE actor.first_name LIKE 'SANDRA' AND actor.last_name LIKE 'KILMER'
AND category.name LIKE 'Action';
