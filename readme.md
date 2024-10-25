Credits to Karpathy neural network zero to hero [site](https://karpathy.ai/zero-to-hero.html).

To connect to the elan server:

```bash
ssh -X  danielrezende2@200.17.141.82  -p  3333
```


To build the docker:

```bash
docker build -t danielrezende .
```

To run the docker:

```bash
docker run -d -p 61439:80 --name pensive_yonath danielrezende
```

To download the site:
```
wget localhost:61439
```

To stop the docker:

```bash
docker stop pensive_yonath
```

To remove the container:

```bash
docker rm -f pensive_yonath
```