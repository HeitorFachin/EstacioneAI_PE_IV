package com.gdonati.EstacioneAi.repository;

import com.gdonati.EstacioneAi.domain.Spot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpotRepository extends JpaRepository <Spot, Long> {
}
