FROM ruby:3.0.2-alpine

RUN apk add --update \
    build-base \
    mariadb-dev \
    sqlite-dev \
    nodejs \
    tzdata \
    && rm -rf /var/cache/apk/*

RUN gem install bundler

WORKDIR /app

COPY . /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

EXPOSE 3000

CMD rm -f tmp/pids/server.pid && rails s -b 'ssl://0.0.0.0:3000?key=localhost.key&cert=localhost.crt'

