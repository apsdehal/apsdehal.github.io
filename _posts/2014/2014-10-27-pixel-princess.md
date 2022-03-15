---
title: 'ECTF-14: Pixel Princess-200 Writeup'
layout: post
meta: Writeup for ECTF '14
tags: [writeups] 
class: post
description: Writeup for Pixel Princess task in ECTF 2014
---
Recently, at [SDSLabs](http://sdslabs.co) we participated in ectf'14 hosted by NITK. CTF was fun and we ended up at overall position 10. Here is a ctf for task `Pixel Princess`.

We are provided with description and link to a file as follows:

> Find the princess. Get the flag.
> [bower.tar.gz](/assets/others/bowser.tar.gz)

First we ran the `file` command on the given zip which showed that the zip is a gzip compressed data.

```
file bowser.tar.gz
bowser.tar.gz: gzip compressed data, from Unix, last modified: Thu Oct 16 04:54:39 2014
```

Running 
```
tar -xzvf bowser.tar.gz 
```

provides us with an image `bowser.jpg`

![bowser.jpg](/assets/img/posts/ectf/bowser.jpg)

Running `strings` on the `jpg` file shows there is a file zipped in image

```
strings bowser.jpg
.
.
.
MarioCastle.jpgUT
>Tux
```

This gives a clue that image file `MarioCastle.jpg` compressed in `bowser.jpg` file might contain flag.

Running `unzip` command on `bowser.jpg` inflates the `MarioCastle.jpg` file.
![mariocastle.jpg](/assets/img/posts/ectf/MarioCastle.jpg)

This first indicates that `MarioCastle.jpg` is also a zip file with password, but that leads to nothing. So another option is to use `steghide`

Running 
```
steghide extract -sf MarioCastle.jpg
```

and entering password for `MarioCaste.jpg` returns nothing, so we tried `steghide` on original image `bowser.jpg` which works :) and gives a `tar.gz` file, which we extarct to get a jpg file with flag as `You_F0unD_m3`.

![flaga.jpg](/assets/img/posts/ectf/flaga.jpg)