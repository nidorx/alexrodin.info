<div align="center">
    <h1>Alex Rodin</h1>
    <img src="./docs/screen.gif" width="100%" />
    <p align="center">
        <a href="http://alexrodin.info">http://alexrodin.info</a>
    </p>
</div>

Meu site, alexrodin.info


## Servidor local (desenvolvimento)

```bash
npm start
```

## Build versão de deploy

```bash
npm run-script build
```

## Publicação na AWS

npm install pm2

PM2_PUBLIC_KEY=m6p652dwh8d6z6v
PM2_SECRET_KEY=bq4p52z2637q78c

```bash
# Geração da key (deve ser importada na interface da AWS)
ssh-keygen -f nidorx -c "nidorx"

exec ssh-agent bash
ssh-add nidorx.pem
ssh -i alexrodin.info ubuntu@52.67.23.160



mkdir alexrodin.info

pm2 start ./dist/index.js --name "server-3000_glorex-app"


```
3camadas.com.br  clan-headshot.com  err  hackaton  iptalbes_stop.sh  mapadeviagem.com  minecraft-server-1.12.2  out  thawancavalcante.com  wetty
ubuntu@ip-172-30-1-179:~$ service --status-all
 [ + ]  acpid
 [ - ]  apparmor
 [ ? ]  apport
 [ + ]  atd
 [ ? ]  console-setup
 [ + ]  cron
 [ ? ]  cryptdisks
 [ ? ]  cryptdisks-early
 [ - ]  dbus
 [ ? ]  dns-clean
 [ + ]  friendly-recovery
 [ - ]  grub-common
 [ ? ]  irqbalance
 [ ? ]  killprocs
 [ ? ]  kmod
 [ - ]  landscape-client
 [ ? ]  mysql
 [ ? ]  networking
 [ + ]  nginx
 [ ? ]  ondemand
 [ ? ]  open-vm-tools
 [ - ]  php7.1-fpm
 [ ? ]  pppd-dns
 [ - ]  procps
 [ ? ]  rc.local
 [ + ]  resolvconf
 [ - ]  rsync
 [ + ]  rsyslog
 [ ? ]  screen-cleanup
 [ ? ]  sendsigs
 [ + ]  shellinabox
 [ - ]  ssh
 [ - ]  sudo
 [ - ]  udev
 [ ? ]  umountfs
 [ ? ]  umountnfs.sh
 [ ? ]  umountroot
 [ - ]  unattended-upgrades
 [ - ]  urandom
 [ - ]  x11-common
