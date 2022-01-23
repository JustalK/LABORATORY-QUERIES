# LABORATORY-QUERIES

This project is a demonstration of how to use RTK Queries and useSWR in a `react` project. The example is really simple and well documented for being use as a tutorial presentation.

From my point of view, SWR and RTK is very powerful tool that should be use everytime an application is fetching data from an API. Those two tools uses with intelligence the cache and avoid as much as possible the loading screen and the useless call. However, with such a strong power, you also need to pay attention to the cache and to update it when needed.

## Plan of the presentation

- [Problems and Questions](#problems-and-questions)
- [Standard](#standard)
- [For going further](#for-going-further)

## Axios

Really direct way to fetch data from anywhere :

![Alt text](documentation/axios.png?raw=true "SWR")

## Problems and Questions

- What if I just need 1 min precision ?
- What if I need to do the exact same call somewhere else in the app ?
- What if I need revalidation when I exit and come back on the page ?

## SWR/RTK

Stale-While-Revalidate Strategy

![Alt text](documentation/swr.png?raw=true "SWR")

# Standard

https://datatracker.ietf.org/doc/html/rfc5861

## For going further

https://javascript.plainenglish.io/stop-using-fetch-api-directly-swr-is-way-better-588976ef6782
https://medium.com/nerd-for-tech/swr-frontend-data-fetching-and-caching-ca0313239d6f
