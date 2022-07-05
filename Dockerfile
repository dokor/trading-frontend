FROM 988728670124.dkr.ecr.eu-west-3.amazonaws.com/cda-ds/nginx-spa:v1.19.4

COPY docker/nginx/default.conf.template /etc/nginx/templates/custom.conf.template

COPY build .
