package com.gdonati.EstacioneAi.repository;

import com.gdonati.EstacioneAi.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarsRepository extends JpaRepository <Car, Long> {
}
