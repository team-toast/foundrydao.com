#!/bin/bash

set -e

echo "compressing html/"
tar -cf dist.tar html

echo "Updating foundrydao.com"
echo "transferring dist.tar"
scp -i $2 dist.tar $1@foundrydao.com:~/update/
echo "calling remote update script"
ssh -i $2 $1@foundrydao.com '~/bin/update'

echo "remote update finished, removing tar"
rm dist.tar
