#!/usr/bin/env node
const Commander = require('commander');
const Conf = require('../package.json');
const login = require('../commands/login');
const Header = require('../commands/header');
const Entry = require('../commands/entry');

const header = new Header();
const entry = new Entry();
Commander.version(Conf.version);
Commander
    .command('login <email> <password>')
    .description('Ekşi\'ye giriş')
    .action(async ()=>{
      console.log(await login.login);
    });

Commander
    .command('baslik')
    .description('Başlıkları Listele')
    .option('-l,--limit <limit>', 'Sonuçları Limitle')
    .option('-c,--channel <channel>', 'Kanalı Göster')
    .action(async (options)=>{
      console.log(await header.getHeaders(options.limit, options.channel));
    });

Commander
    .command('tarih <year>')
    .description('Tarihte Bugün')
    .option('-l,--limit <limit>', 'Sonuçları Limitle')
    .action(async (year, options)=>{
      console.log(await header.getOldHeaders(year, options.limit));
    });

Commander
    .command('debe')
    .description('Debeyi Listeler')
    .option('-l,--limit <limit>', 'Sonuçları Limitle')
    .action(async (options)=>{
      console.log(await header.getDebes(options.limit));
    });

Commander
    .command('entry <header>')
    .description('Entry\'leri Göster')
    .option('-p,--page <page>', 'Sayfayı Seç')
    .action(async (header, options)=>{
      console.log(await entry.getEntries(encodeURI(header), options.page));
    });

Commander
    .command('no <entryNumber>')
    .description('Numaralı Entry\'i Göster')
    .action(async (entryNumber)=>{
      console.log(await entry.getEntry(entryNumber));
    });

Commander.parse(process.argv);
