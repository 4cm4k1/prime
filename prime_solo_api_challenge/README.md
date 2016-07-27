# Solo API Challenge

In this challenge we will be using the OMDb API to create a web page displaying your top 3 movies. You should make 3 queries to the OMDb API for each of your movies and append them to your screen. Each movie entry should use at least 3 keys from the returned data (one being the image). Your page should be styled with CSS and look presentable.

Here is a sample URL: http://www.omdbapi.com/?t=Sneakers&y=&plot=short&r=json

Here is a sample JSON return:

{"Title":"Sneakers","Year":"1992","Rated":"PG-13","Released":"11 Sep 1992","Runtime":"126 min","Genre":"Comedy, Crime, Drama","Director":"Phil Alden Robinson","Writer":"Phil Alden Robinson, Lawrence Lasker, Walter F. Parkes","Actors":"Jo Marr, Gary Hershberger, Robert Redford, Sidney Poitier","Plot":"A security pro finds his past coming back to haunt him, when he and his unique team are tasked with retrieving a particularly important item.","Language":"English, Russian, Chinese","Country":"USA","Awards":"2 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTk1NTA1MzM2OV5BMl5BanBnXkFtZTgwNDMzNTcxMTE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.1","imdbVotes":"43,604","imdbID":"tt0105435","Type":"movie","Response":"True"}
Much more example fun can be had here.

# Hard Mode

Add a search input that will allow you to search for a movie and display the results in a meaningful way.

Here is a sample URL: http://www.omdbapi.com/?s=Batman

Here is a sample JSON return:

{"Search":[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTE5NzU3MTYzOF5BMl5BanBnXkFtZTgwNTM5NjQxODE@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BODM2OTc0Njg2OF5BMl5BanBnXkFtZTgwMDA4NjQxMTE@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTM1NTIyNjkwM15BMl5BanBnXkFtZTcwODkxOTQxMQ@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAwOTEyNjg0M15BMl5BanBnXkFtZTYwODQyMTI5._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU3MjcwNzY3NF5BMl5BanBnXkFtZTYwNzA2MTI5._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTMwNDEyMjExOF5BMl5BanBnXkFtZTcwMzU4MDU0Mw@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"},{"Title":"Batman: Mask of the Phantasm","Year":"1993","imdbID":"tt0106364","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTMzODU0NTYxN15BMl5BanBnXkFtZTcwNDUxNzUyMQ@@._V1_SX300.jpg"}],"totalResults":"307","Response":"True"}

# Pro Mode

Generate a random movie using the ID API.

Here is a sample URL: http://www.omdbapi.com/?i=tt0105435&plot=short&r=json

Here is a sample JSON return:

{"Title":"Sneakers","Year":"1992","Rated":"PG-13","Released":"11 Sep 1992","Runtime":"126 min","Genre":"Comedy, Crime, Drama","Director":"Phil Alden Robinson","Writer":"Phil Alden Robinson, Lawrence Lasker, Walter F. Parkes","Actors":"Jo Marr, Gary Hershberger, Robert Redford, Sidney Poitier","Plot":"A security pro finds his past coming back to haunt him, when he and his unique team are tasked with retrieving a particularly important item.","Language":"English, Russian, Chinese","Country":"USA","Awards":"2 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTk1NTA1MzM2OV5BMl5BanBnXkFtZTgwNDMzNTcxMTE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.1","imdbVotes":"43,604","imdbID":"tt0105435","Type":"movie","Response":"True"}
