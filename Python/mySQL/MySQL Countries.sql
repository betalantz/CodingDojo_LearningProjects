SELECT name, language, percentage 
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE language LIKE 'Slovene'
ORDER BY percentage DESC;

SELECT countries.name AS country, COUNT(cities.name) as total_cities
FROM countries
JOIN cities ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY total_cities DESC;

SELECT cities.name, cities.population 
FROM cities
JOIN countries ON countries.id = cities.country_id
WHERE countries.name LIKE 'Mexico'and cities.population > 500000
ORDER BY population DESC;

SELECT name, language, percentage 
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE percentage > 89
ORDER BY percentage DESC;

SELECT name, surface_area, population FROM countries
WHERE surface_area < 501 AND population > 100000;

SELECT name, government_form, capital, life_expectancy FROM countries
WHERE government_form LIKE 'Constitutional Monarchy' AND capital > 200 AND life_expectancy > 75;

SELECT countries.name AS country, cities.name AS city, cities.district, cities.population 
FROM cities
LEFT JOIN countries
ON countries.id = cities.country_id
WHERE cities.district LIKE 'Buenos Aires' AND cities.population > 500000;

SELECT region, count(name) AS countries FROM countries
GROUP BY region
ORDER BY countries DESC;