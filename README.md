# alexrodin.info

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

```bash
exec ssh-agent bash
ssh-add nidorx.pem
ssh ubuntu@52.67.23.160

mkdir alexrodin.info

pm2 start ./dist/index.js --name "server-3000_glorex-app"

tar xvzf /var/www/alexrodin.info.tar.gz -C /var/www/alexrodin.info && rm /var/www/alexrodin.info.tar.gz
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
