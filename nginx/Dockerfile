FROM nginx:alpine

# COPY --from=builder /usr/app/build /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf

# COPY ./nginx/nginx.conf /etc/nginx

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf