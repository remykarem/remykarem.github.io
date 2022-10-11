# Buffer management

What happens when a page is requested?

```txt
Is the requested page in the buffer pool?   --yes--> *pin* the page & return the address
   |
   No
   ↓
Is there a free frame?  --no--> choose a frame with unpinned pages
   |                                       ↓
   Yes                      /---no---- is frame dirty?
   ↓                       /               |  
     <-------------------- /                Yes
read requested page                        ↓
into frame                              Write to disk
   ↓
pin page and return address
