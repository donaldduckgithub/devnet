---
title: NAT ASA ASDM
description: Create NAT exclusion rules in ASDM Launcher
tags: nat, asa
---

Als erstes NAT exclusion Rule einstellen f�r internet Netze. Das hei�t source und dest IP bleibt originale
<markdown-image src="nat_asa_asdm/1.PNG" alt="Alt text"></markdown-image>

<markdown-image src="nat_asa_asdm/2.PNG" alt="Alt text"></markdown-image>

als n�chstes die eigentlichen nat RUles machen. einmal dynamic PAT f�r anyoutside regel und der rest static nat
<markdown-image src="nat_asa_asdm/3.PNG" alt="Alt text"></markdown-image>

<markdown-image src="nat_asa_asdm/4.PNG" alt="Alt text"></markdown-image>

<markdown-image src="nat_asa_asdm/5.PNG" alt="Alt text"></markdown-image>

Exclude NAT rule:
<markdown-image src="nat_asa_asdm/6.PNG" alt="Alt text"></markdown-image>


NAT rules:
<markdown-image src="nat_asa_asdm/7.PNG" alt="Alt text"></markdown-image>

