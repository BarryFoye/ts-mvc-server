# Project Name

> This service app acts as a API gateway interface. It is designed to be the gateway between the web application and the underlying services which feed it data. Along with that the service will be a focal point for safety and security.

## Table of Contents

-   [General Info](#general-information)
-   [Technologies Used](#technologies-used)
-   [Features](#features)
-   [Setup](#setup)
-   [Usage](#usage)
-   [Room for Improvement](#room-for-improvement)

## General Information

This is a component of the nacho-banana app designed to facilitate underlying services interactions such as data and authorisation without compromising the service itself. Therefore it allows for additional services to be added and evolve whilst respecting a single common interface for external calling apps.

Generally this service has two functions, 1. To provide a gateway to application services and 2. to abstract the services in scope during a transaction.

The main purpose is to have a single entry point for requests and for the gateway to forward them on and provide responses.

## Technologies Used

-   TypeScript - Version 3.8.3
-   axios - 0.22.0
-   express - 4.17.1
-   morgan - 1.10.0
-   swagger-ui-express - 4.1.6
-   tsoa - 3.13.0

## Features

-   Swagger integration

## Setup

### Prerequsites

-   Have the correct version (see above) of TypeScript installed

The project dependencies can be installed with npm and are found in the [package.json](./package.json) file. To do this, run:

```bash
npm install
```

## Usage

### To run the server in dev type:

```bash
npm run dev1
```

You'll see some initialisation output and finally see the message: _Data Server running on http://localhost:3000/_

You can then navigate to the [swagger docs](http://localhost:3000/docs/) and can see the API description

### To run the server in production we first build it using:

```bash
npm run build
```

Note the output will create a ./build folder.

### To start the server use:

```bash
npm run start
```

This then starts the production app. You can confirm this again by navigating to [swagger docs](http://localhost:3000/docs/).

## Room for Improvement

Add endpoints
