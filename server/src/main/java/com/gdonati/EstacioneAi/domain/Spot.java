package com.gdonati.EstacioneAi.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tb_spot")
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Spot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private char line;

    private Integer number;

    @OneToOne
    @JoinColumn(name = "car_id", nullable = true)
    private Car car;
}