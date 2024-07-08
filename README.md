## Technical Test Backend Ebbudy

### Getting Started
 - Running Server
 ```shell
    npm i && npm run start:dev
 ```

1. Create USERS firestore collection in your firebase
2. Test the endpoint below

- Testing Endpoint Fetch User Data **[/fetch-user-data](http://localhost:9000/fetch-user-data)**  path **/fetch-user-data/:userId**:

```shell
curl  -X GET \
  'http://localhost:9000/fetch-user-data/A0sl6T473u5p0ed420OE' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)'

```

- Testing Endpoint Update User Data **[/update-user-data](http://localhost:9000/update-user-data)**  path **/update-user-data**:

```shell
curl  -X POST \
  'http://localhost:9000/update-user-data' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "userId" : "A0sl6T473u5p0ed420OE",
  "data": {
    "name": "Alam Wibowo",
    "email": "admin@ebbudy.com"
  }
}'

```
