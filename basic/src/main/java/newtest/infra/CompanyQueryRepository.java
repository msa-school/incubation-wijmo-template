package newtest.infra;

import java.util.List;
import newtest.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(
    collectionResourceRel = "companyQueries",
    path = "companyQueries"
)
public interface CompanyQueryRepository
    extends PagingAndSortingRepository<CompanyQuery, Long> {}
