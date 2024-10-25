
To build the docker:

```bash
docker build -t danielrezende .
```

To run the docker:

```bash
docker run -d -p 61439:80 my-nginx-server
```

To download the site:
```
wget localhost:61439
```

To stop the docker:

```bash
docker stop container-name
```