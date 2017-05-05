```
docker-compose up --build
```

Waiting for web services to be ready...

```
app_1  | 
app_1  | Waiting until datbase is ready...
app_1  | Database not ready. Sleeping one second...
db_1   | Apache CouchDB 1.6.1 (LogLevel=info) is starting.
db_1   | Apache CouchDB has started. Time to relax.
db_1   | [info] [<0.32.0>] Apache CouchDB has started on http://0.0.0.0:5984/
db_1   | [info] [<0.104.0>] 172.30.0.2 - - GET / 200
app_1  | Database is ready!
```
