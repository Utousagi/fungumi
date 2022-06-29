package uto.fungumi.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Document("Actor")
@AllArgsConstructor
public class ActorInfo implements Serializable {
    @Id
    @Field("actor_id")
    @Indexed(unique = true)
    private Integer actorId;

    @Field("byname")
    private String[] alias;

    @Field("voiceactor")
    private String[] voiceActor;
}
