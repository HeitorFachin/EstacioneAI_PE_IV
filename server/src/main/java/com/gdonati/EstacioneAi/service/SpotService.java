package com.gdonati.EstacioneAi.service;

import com.gdonati.EstacioneAi.domain.Car;
import com.gdonati.EstacioneAi.domain.Spot;
import com.gdonati.EstacioneAi.repository.SpotRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpotService {

    private final SpotRepository spotRepository;
    private final CarsService carsService;

    public SpotService(SpotRepository spotRepository, CarsService carsService) {
        this.spotRepository = spotRepository;
        this.carsService = carsService;
    }

    public List<Spot> searchAllSpot(){return spotRepository.findAll();}

    public Spot createSpot(Spot spot){return spotRepository.save(spot);}

    // Em SpotService.java
    public String updateSpotCar(Long id, Long car_id){
        Spot spot = spotRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vaga não encontrada"));

        if (car_id == null) {
            spot.setCar(null);
            spotRepository.save(spot);
            return "Vaga liberada com sucesso";
        } else {
            Car car = carsService.searchCar(car_id);
            if (car == null) {
                throw new RuntimeException("Carro não encontrado para atribuição");
            }
            spot.setCar(car);
            spotRepository.save(spot);
            return "Carro atualizado com sucesso na vaga";
        }
    }

    public Spot searchSpot(Long id){return spotRepository.findById(id).orElse(null);}

    public void deleteSpot(Long id){spotRepository.deleteById(id);}
}
