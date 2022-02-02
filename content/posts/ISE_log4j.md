---
title: ISE hotfix log4j
description: how to install hotfix like the log4j hotfix in the Cisco ISE
tags: ise
---

helpful commands
``` python
 https://www.cisco.com/c/en/us/support/docs/security/identity-services-engine-software/215348-how-to-configure-repository-on-identity.pdf  # repository documentation 

  certutil -hashfile ise-apply-CSCwa47133_Ver_24_30_allpatches-SPA.tar.gz MD5  # check hash sum for file in Windows cmd (control with hash on cisco website) 

  show repository svrabn002.ioint.de 

  show app status ise
  
  copy ftp://10.10.14.26/ise-apply-CSCwa47133_Ver_24_30_allpatches-SPA.tar.gz disk:/  # nicht notwendig für small patch direkt aus repo laden

application install ise-apply-CSCwa47133_Ver_24_30_allpatches-SPA.tar.gz svrabn002.ioint.de 

 show logging application hotpatch.log 
```