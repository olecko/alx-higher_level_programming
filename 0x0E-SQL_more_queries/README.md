# SQL - More queries
A project done during **Full Stack Software Engineering Studies** at **ALX** to learn about how to `create a new user`, `manage privileges` for a user, `PRIMARY KEY`, `FOREIGN KEY`, constraints, subqueries, `JOIN` and `UNION` with **MySQL**.

## Technologies
* `MySQL 8.0` (Version 8.0.3)
* Tested on `Ubuntu 20.04 LTS`

##Files
**Here's a list of the files alongside the description of the scripts they contain**
| **FILES** | **DESCRIPTION** |
| - - - | - - - |
| `0-privileges.sql` | A script that lists all privileges of the **MySQL** users `user_0d_1` and `user_0d_2` on your server (in localhost) |
| `1-create_user.sql` | A Write a script that creates the **MySQL** server user `user_0d_1` |
|		      | * `user_0d_1` should have all privileges on your MySQL server |
|		      | * The `user_0d_1` password should be set to `user_0d_1_pwd` |
|		      | * If the user `user_0d_1` already exists, your script should not fail |
| `2-create_read_user.sql` | a script that creates the database `hbtn_0d_2` and the user `user_0d_2` |
| `3-force_name.sql` | A script that creates the table `force_name` on your MySQL server. |
| `4-never_empty.sql` | A script that creates the table `id_not_null` on your MySQL server. |
| `5-unique_id.sql` | A script that creates the table `unique_id` on your MySQL server. |
| `6-states.sql` | A script that creates the database `hbtn_0d_usa` and the table states (in the database `hbtn_0d_usa`) on your MySQL server |
| `7-cities.sql` | A script that creates the database `hbtn_0d_usa` and the table cities (in the database `hbtn_0d_usa`) on your MySQL server |
| `8-cities_of_california_subquery.sql` | A script that lists all the cities of California that can be found in the database `hbtn_0d_usa` |
| `9-cities_by_state_join.sql` | A script that lists all cities contained in the database `hbtn_0d_usa` |
| `10-genre_id_by_show.sql` | A script that lists all shows contained in `hbtn_0d_tvshows` that have at least one genre linked |
| `11-genre_id_all_shows.sql` | A script that lists all shows contained in the database `hbtn_0d_tvshows` |
| `12-no_genre.sql` | A  script that lists all shows contained in `hbtn_0d_tvshows` without a genre linked |
| `13-count_shows_by_genre.sql` | A script that lists all genres from `hbtn_0d_tvshows` and displays the number of shows linked to each |
| `14-my_genres.sql` | A script that uses the `hbtn_0d_tvshows` database to lists all genres of the show Dexter |
| `15-comedy_only.sql` | A script that lists all Comedy shows in the database `hbtn_0d_tvshows` |
| `16-shows_by_genre.sql` | A script that lists all shows, and all genres linked to that show, from the database `hbtn_0d_tvshows` |
| `100-not_my_genres.sql` | A script that uses the `hbtn_0d_tvshows` database to list all genres not linked to the show Dexter |
| `101-not_a_comedy.sql` | A script that lists all shows without the genre Comedy in the database `hbtn_0d_tvshows` |
| `102-rating_shows.sql` | A script that lists all shows from `hbtn_0d_tvshows_rate` by their rating |
| `103-rating_genres.sql` | A script that lists all genres in the database `hbtn_0d_tvshows_rate` by their rating |
