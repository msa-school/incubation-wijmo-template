package newtest.infra;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import newtest.config.kafka.KafkaProcessor;
import newtest.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
public class CompanyQueryViewHandler {

    @Autowired
    private CompanyQueryRepository companyQueryRepository;
}
