FROM openjdk:11
RUN apt-get update \
  && apt-get install -y \
    net-tools \
    less \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

ENV APP_ROOT=/apps
ENV APP_USER=test
ENV APP_JAR=kafkaproducer-1.0-SNAPSHOT.jar

RUN groupadd -r ${APP_USER} &&\
    useradd -r -g ${APP_USER} -d ${APP_ROOT} -s /sbin/nologin -c "Docker image user" ${APP_USER}


RUN mkdir -p ${APP_ROOT} &&\
    mkdir -p ${APP_ROOT}/lib &&\
    mkdir -p ${APP_ROOT}/log &&\
    touch ${APP_ROOT}/log/gc.log

COPY target/${APP_JAR} ${APP_ROOT}/lib
RUN chown -R ${APP_USER}:${APP_USER} ${APP_ROOT}

WORKDIR ${APP_ROOT}
USER ${APP_USER}
ENTRYPOINT java ${JAVA_OPTS} -Xlog:gc*=debug:file=${APP_ROOT}/log/gc.log -jar ${APP_ROOT}/lib/${APP_JAR}
