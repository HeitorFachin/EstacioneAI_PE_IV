package com.gdonati.EstacioneAi.repository;

import com.gdonati.EstacioneAi.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository <Client, Long> {
}
