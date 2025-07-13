package com.gdonati.EstacioneAi.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "tb_car")
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;

    private String modelo;

    private String cor;

    @Column(unique = true)
    private String placa;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
}
