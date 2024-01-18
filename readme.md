# Useful commands

-   sudo sysctl -w vm.max_map_count=262144 (exitcode 78 issue) - to allocate more memory
-   xpack.security.transport.ssl.enabled: true
-   xpack.security.http.ssl.enabled: true
-   curl -H 'Content-Type: application/json' \
     -d '{ "name":"sachin"}' \
     -X POST \
     http://localhost:8080/read
-   curl --cacert http_ca.crt -u elastic:1q+DFGxcNC-NrG\*1HJnj https://localhost:9200
-   To set password for users:
    Enter the container's shell: docker exec -it <container_name> /bin/bash
    Use elasticsearch-setup-passwords auto to generate random passwords for all users.
    Alternatively, use elasticsearch-reset-password -u elastic to set a specific password for the "elastic" user.
-   export http_ca.cert:
    docker cp <source_container_name_or_id>:/usr/share/elasticsearch/config/certs/http_ca.cert <target_container_name_or_id>:/destination/path

# Userful learnings

-   https://www.youtube.com/watch?v=Jk4_4k1N3yw
-   https://www.youtube.com/playlist?list=PL_mJOmq4zsHaUv-F1Q5tn6sPEG1S18ud9
-   https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html
-   https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/client-connecting.html (javascript cleint guide)
-   https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html (setting up elasticsearch in docker guide)

# curl

-   curl -H 'Content-Type: application/json' \
     -d '{ "name":"sachin"}' \
     -X POST \
     http://localhost:8080/read

-   curl -H 'Content-Type: application/json' \
     -d '{ "firstname":"sachin", "lastname":"tendulkar", "email":"sachin@gmail.com"}' \
     -X POST \
     http://localhost:8080/create
