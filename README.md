# Moving Averages

## Running from Docker
```shell
docker run -it -p 3000:3000 farrisbar/maverages 
```

## Building from source
Node.js is required. Tested with Node 16 on Mac. Also tested on Docker.
```shell
cd <a known location>

git clone https://github.com/farrisbar/maverages.git
cd maverages

npm install

npm run build

npm run test
```
Browse test results on http://localhost:3000

Press CTRL+C to stop the server. 
