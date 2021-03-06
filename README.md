[![Build Status](https://travis-ci.com/michealccc/match-game-server.svg?token=1RAYjFYZCDh9EfCiHC4M&branch=develop)](https://travis-ci.com/michealccc/match-game-server)

# match-game-server

A backend for [https://github.com/myiwt/match-game-client](https://github.com/myiwt/match-game-client)


## Demo

[Match Game Server Demo](https://match-game-server.herokuapp.com/)

## Tech Stack

**Server:** Node, Express

  
## Run Locally

Clone the project

```bash
git clone https://github.com/michealccc/match-game-server.git
```

Go to the project directory

```bash
cd match-game-server
```

Install dependencies

```bash
npm install
```

On MacOS or Linux, run the app with this command:
```bash
DEBUG=match-game-server:* npm start
```

On Windows Command Prompt, use this command:
```bash
SET DEBUG=match-game-server:* & npm start
```

On Windows PowerShell, use this command:
```bash
$env:DEBUG='match-game-server:*'; npm start
```

Load in browser

```bash
http://localhost:3000/
```
