FROM node:16
# Client    
ENV AWS_ACCESS_KEY_ID XXID
ENV AWS_SECRET_ACCESS_KEY XXSECRET
ENV AWS_SESSION_TOKEN XXTOKEN
ENV countryAPI YYKEY1 
ENV countryInfoAPI YYKEY2 
ENV countryWeatherAPI YYKEY3
ENV filckrAPI YYKEY4  

ADD /client /client
ADD /server /server
WORKDIR /client
RUN npm install 
RUN npm run build
WORKDIR /server
RUN npm install
EXPOSE 3000


CMD ["node","index.js"]
