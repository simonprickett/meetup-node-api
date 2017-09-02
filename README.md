# meetup-node-api

## Server

Requires a Meetup API key, set it using an environment variable, or hard code it into `server/server.js`.  Example use of environment variable:

```
export MEETUP_API_KEY=key_goes_here
```

Do this before starting the server.

```
cd server
npm install
npm start
```

See output at:

```
http://localhost:8080/groups
```

```
http://localhost:8080/events/<groupId>
```

example:

```
http://localhost:8080/events/pythonsd
```

## Client

```
cd client
python -m SimpleHTTPServer
```

Navigate to:

```
http://localhost:8000
```
