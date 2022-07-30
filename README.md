# CloudResume

This article is for the [#CloudResumeChallenge](https://cloudresumechallenge.dev/docs/the-challenge/azure/) by [Forrest Brazeal](https://twitter.com/forrestbrazeal).

[My github repo](https://github.com/mcheath31/CloudResume)
[My site](https://www.mcheath.com/)

## Introduction

When I started learning more about cloud and wanted to start pivoting my career towards it, I was becoming overwhelmed. The internet is filled with things claiming to be 'The way to get a job in the Cloud.' 

I found the Cloud resume challenge and originally had started in AWS, studying for the Solutions Architect exam. When life got in the way I had to shelf that and came back to the challenge in 2022. This is where I started to change to Azure.

## The Challenge

Tools used

- Github
- Html/CSS/Javascript
- Node.js
- CI/CD (Github Actions)
- Azure CosmosDB
- Azure Functions
- Azure Static Webpage hosting via a storage account
- Azure CDN

The challenge consisted of utilizing multiple technologies, both inside of Azure and outside. Learning Azure felt like a fraction of the challenge where implementing them hands-on is where the real learning occurred. My order of operations during this challenge came with building the site first, this was finding a template and filling my information out. I look to change some of the webpage as well as add some more information at a later date.

After the webpage I created the CosmosDB database while using serverless capacity to save on budget. This consisted of one database, one container and one item to house the counter for the webpage.

Next on the block was my azure function, which I would say was the toughest part of my challenge as I had never needed to produce an api. A lot of my time was spent here with trial and error. Initially I had tried C#, and then python but settled on Node.Js. I was able to get this working and displaying locally on my site. Once that was done, I deployed the function to azure, as well as deployed the site to static hosting.

The next portion was setting up the custom end point, I purchased my domain, pointed the addresses at each other and waited for the DNS to catch up. I made sure to change the CORS rules in my Azure function, and everything on the website was good to go.

The last thing was to make my pipeline, I utilized Microsoft Docs. While following the instructions on setting up [Github Actions](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel), I made a few stumbles while forgetting names and not checking my working directory, I was able to push my frontend to github to azure while passing the builds.

## Going forward

There are a few different things I am looking to implement with the site moving forward. I will be building unit testing for my backend, as well as implemented infrastructure as code via Terraform. I will be upkeeping the site normally and looking for new pieces to add to this project as time goes on.
