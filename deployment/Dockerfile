FROM ubuntu:17.04
RUN apt-get update && apt-get -y install curl # it seems that update need to be in the same line
RUN cd /usr && curl -s https://nodejs.org/dist/v6.9.1/node-v6.9.1-linux-x64.tar.gz | tar -zx --strip-components=1
RUN cd
RUN mkdir -p /var/www/mqacm/
COPY ./ /var/www/mqacm/
RUN chmod a+x /var/www/mqacm/deployment/docker-entrypoint.sh
EXPOSE 5000
ENTRYPOINT ["/var/www/mqacm/deployment/docker-entrypoint.sh"]