# Polyanka

An application with a very secret purpose.

## run on localhost

1. install deps

```sh
# in project root folder

# install nx's deps
npm i

# go to frontend app and install deps
cd apps/frontend
npm i

# go to backend app and install deps
cd ../backend
npm i
```

2. add `.env` file

```shell
# from project root
cd apps/frontend
touch .env
```

And you need to add variables from `.env.example`

2. run all apps

```shell
# run both backend and frontend
npm run serve-all
```
