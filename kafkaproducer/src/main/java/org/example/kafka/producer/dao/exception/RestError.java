package org.example.kafka.producer.dao.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class RestError {

    private HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;

    private RestError() {
        timestamp = LocalDateTime.now();
    }

    public RestError(HttpStatus status, Throwable t) {
        this();
        this.status = status;
        this.message = t.getMessage();
    }

    public HttpStatus getStatus() {
        return status;
    }

    public int getStatusValue() {
        return status.value();
    }

    public String getMessage() {
        return message;
    }
}

