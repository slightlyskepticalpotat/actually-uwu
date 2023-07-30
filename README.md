# ActuallyUWU: Useful Weather Utility 

## Usage
You can check out our hosted instance at [https://actuallyuwu.com](https://actuallyuwu.com). Or host your own with the instructions below.

## Installation
```bash
git clone https://github.com/slightlyskepticalpotat/actually-uwu.git
cd actually-uwu/
npm install
npm run build
export DATABASE_URL=url API_URL='https://api.openweathermap.org/data/2.5' API_KEY=key FAST_REFRESH=false yarn start
npm start
```
---
## Inspiration
Ever open a weather app to find temperature variations, humidity, sunrise, sunset, wind speeds, moon phases, a 14-day weather forecast spread out over seven different pages, and more? We did. Weather apps and sites often contain every little piece of information except your outfit and commute method.

## Function
ActuallyUWU changes that. Our cross-platform web app intelligently analyses the weather in your area, interprets it with previously-selected preferences, and gives you instant tips on what to wear and how you should commute. Fair warning, you'll talk about weather less—since it's just not a concern anymore.

## Construction
We bootstrapped our project with the T3 stack—TypeScript, Next.js, Prisma and tRPC. From there, we began building the UI, borrowing components from the Material UI component library, while thinking about onboarding UX. Our onboarding survey covers questions like favourite rain type or rain protection or preferred method of commute and covers a range of scenarios. We store this data over the cloud with **MongoDB Atlas** before fetching it to query a variety of APIs like the Geocoding API, OpenWeather API and Quotes API. After that, we hosted it with Vercel and integrated the process with GitHub for rapid feedback, and hacked on authentication.

## Challenges 
Many challenges were encountered and successfully addressed. A particularly troublesome one was conflicting dependencies, but we discovered a workaround that worked on production. We also faced difficulty with smooth scrolling animations and using all the weather data—issues that we look forward to tackling as we continue to expand on this project after the hackathon.

## Successes
We're particularly proud of our usage of **Github Projects** for project management, since we brainstormed ideas before and got more progress done on the first day than at other hackathons. Other successes are a GitHub project board to keep track of tasks, coordinating virtually, and using Vercel and ESLint to verify commit robustness. 

## Learning
We struck a balance between team members doing things that were familar to them, helping each other, and completely venturing into the unknown. Most major components of our project (authentication, hosting, **MongoDB Atlas**) were initially implemented by someone with little to no prior experience, before being reviewed and improved by another person that had more experience. We definitely learned tons.

## What's Next
One next step is converting this into a native app for mobile devices. Another much-needed feature would be integration with Google Maps or a similar service to see commute weather. Finally, we need to integrate more science-backed health suggestions like our current ones about dangerous UV rays.
