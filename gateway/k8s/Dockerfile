FROM openjdk:11
RUN apt-get update \
  && apt-get install -y \
    net-tools \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

ENV APP_ROOT=/apps
ENV APP_USER=test
ENV APP_JAR=gateway-1.0-SNAPSHOT.jar

RUN groupadd -r ${APP_USER} &&\
    useradd -r -g ${APP_USER} -d ${APP_ROOT} -s /sbin/nologin -c "Docker image user" ${APP_USER}


RUN mkdir -p ${APP_ROOT} &&\
    mkdir -p ${APP_ROOT}/lib

COPY target/${APP_JAR} ${APP_ROOT}/lib
RUN chown -R ${APP_USER}:${APP_USER} ${APP_ROOT}

WORKDIR ${APP_ROOT}
USER ${APP_USER}
ENTRYPOINT java -jar ${APP_ROOT}/lib/${APP_JAR}