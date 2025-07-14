package com.gdonati.EstacioneAi.config;

import com.gdonati.EstacioneAi.domain.Client;
import com.gdonati.EstacioneAi.domain.Spot;
import com.gdonati.EstacioneAi.repository.ClientRepository;
import com.gdonati.EstacioneAi.repository.SpotRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(ClientRepository clientRepo, SpotRepository spotRepo) {
        return args -> {
            for (int i = 1; i <= 30; i++) {
                Client client = new Client();
                client.setName("Cliente " + i);
                client.setPhone(4999990000L + i);
                clientRepo.save(client);
            }

            char[] lines = {'A', 'B'};
            int spotNumber = 1;

            for (char line : lines) {
                for (int i = 1; i <= 10; i++) {
                    Spot spot = new Spot();
                    spot.setLine(line);
                    spot.setNumber(i);
                    spotRepo.save(spot);
                    spotNumber++;
                }
            }

            System.out.println(">>> Clientes e vagas inseridos com sucesso.");
        };
    }
}
