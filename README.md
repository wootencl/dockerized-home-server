# Dockerized Home Server

Dockerized home server intended to be stood up on a *nix server on your LAN. Uses Traefik reverse proxy to funnel incoming HTTP/HTTPS requests to their respective services. 

This project takes _heavily_ from [htpcBeginner/docker-traefik](https://github.com/htpcBeginner/docker-traefik/) so many thanks for the initial work done there.

#### Tools
- [Docker](https://www.docker.com/get-started) **\***
- [Docker Compose](https://docs.docker.com/compose/install/) **\***
- [NVM](https://github.com/creationix/nvm) **\***
- [Terraform](https://www.terraform.io/)
- [Traefik](https://containo.us/traefik/)

_**\*** Required to be installed on server._

### Getting Started
For the most part everything in this repository has been dockerized. With that, a large amount of the tooling is abstracted away into docker containers making their usage OS agnostic. As noted above though the two tools that _are_ required on the developer's machine are Docker and NVM. Once those are installed the below should get the project in a good place to start developing, etc.

    nvm use && npm i

This will first change your systems node version to what the project currently uses (v8) and then install the needed node modules.

