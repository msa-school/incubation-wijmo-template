package newtest.domain;

import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "CompanyQuery_table")
@Data
public class CompanyQuery {

    @Id
    //@GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
}
