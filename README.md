# Final Space Wiki

[Final Space Demo](finalspace.vercel.app)

This is a simple wiki for the show Final Space to allow final space fans to save their favourite characters, episodes and locations.

![Screenshot of home page](/public/homepage.png)
![Screenshot of characters page](/public/characters.png)

## Description

Final Space Wiki is a web application built with Next.js, styled with Tailwind CSS, and powered by Supabase. It's designed to cater to fans of the popular series "Final Spcae" providing a platform where users can save and organize their favorite characters, locations, and episodes from the show.

It uses the [Final Space API](https://finalspaceapi.com/) to fetch data. Users can search for characters, episodes, locations and quotes and view their details and favourite them. Users can also view their favourite characters, episodes and locations.

## Features

- Search and view details for characters, episodes, locations and quotes
- Favourite characters, episodes, locations
- View favourites
- Authenticate with Supabase
- Save favourites to Supabase

## Motivation

I built this project to learn Next.js and Tailwind CSS. I also wanted to learn how to use Supabase as a backend for a web application. I chose to build a wiki for Final Space because I'm a fan of the show and I wanted to build something that I would use or that other fans of the show would use.

## Technologies

Final Space Wiki was built using:

- [Next.js](https://nextjs.org/)
- TailwindCSS
- Supabase
- Sonner
- Heroicons
- React Avatar
- Final Space API

## Installation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```
