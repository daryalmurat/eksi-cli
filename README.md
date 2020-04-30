# eksi-cli
Ekşi Sözlük CLI Aracı

![alt text](https://github.com/daryalmurat/eksi-cli/workflows/Node.js%20CI/badge.svg)
![alt text](https://github.com/daryalmurat/eksi-cli/workflows/Node.js%20Package/badge.svg)
![alt text](https://img.shields.io/npm/v/@daryal/eksicli)

## Kurulum

1. [Nodejs LTS sürümünü indirin](https://nodejs.org/en/download/)
2. Komutu çalıştırın <kbd>npm install -g @daryal/eksicli</kbd>

## Komutlar

	Yardım                                  $ eksi -h
	Başlıkları Listele                      $ eksi baslik [-l,--limit <maksimum-başlık-sayısı>] [-c, --channel <kanal-adı>]
	Tarihte Bugün - Başlıklar               $ eksi tarih <yıl> [-l,limit <maksimum başlık sayısı>]
	Debe                                    $ eksi debe [-l,--limit <maksimum başlık sayısı>]
	Entryleri Getir                         $ eksi entry <header> [-p,--page <sayfa no>]
	Numaralı Entryi Getir                   $ eksi no <entryNumber>

## Örnekler

	Yardım                                  $ eksi -h
	Başlıkları Listele                      $ eksi baslik -l 10 -c spor
	Tarihte Bugün - Başlıklar               $ eksi tarih 2009 -l 10
	Debe                                    $ eksi debe -l 5
	Entryleri Getir                         $ eksi entry 'macbook edinme sebepleri' -p 2
	Numaralı Entryi Getir                   $ eksi no 106330636