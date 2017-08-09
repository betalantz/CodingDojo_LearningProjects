USE twitter;

select * from users
left join tweets on users.id = tweets.user_id
where users.id = 1;

select tweets.tweet as kobe_tweets from users
left join tweets on users.id = tweets.user_id
where users.id = 1;

select first_name, tweet
from users
left join faves
on users.id = faves.user_id
left join tweets
on faves.tweet_id = tweets.id
where users.id=1 or users.id=2;

select users.first_name as followed, users2.first_name as follower
from users
left join follows
on users.id = follows.followed_id
left join users as users2
on users2.id = follows.follower_id
where users.id=1;

select * from users
where users.id NOT IN (
select follower_id from follows
where followed_id=2
) AND users.id != 2;

SELECT users.first_name as user, COUNT(users2.first_name) as follower_count
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id;

SELECT first_name, tweet
FROM users
JOIN tweets
ON users.id = tweets.user_id;
