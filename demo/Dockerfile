FROM troven/api-services-pages
# MAINTAINER Troven <cto@troven.com.au>


RUN git config --global http.sslverify "false"

COPY package.json package.json  
RUN npm install

# Add your source files
COPY src src
COPY public public

# Launch NodeJS
CMD ["npm","start"]  

EXPOSE 5000
