package com.gdonati.EstacioneAi.service;

import com.gdonati.EstacioneAi.domain.Car;
import com.gdonati.EstacioneAi.repository.CarsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarsService {

    private final CarsRepository carsRepository;

    public CarsService(CarsRepository carsRepository) { this.carsRepository = carsRepository; }

    public List<Car> searchAllCars(){return carsRepository.findAll();}

    public Car createCar(Car car){return carsRepository.save(car);}

    public Car searchCar(Long id){return carsRepository.findById(id).orElse(null);}

    public void deleteCar(Long id){carsRepository.deleteById(id);}
}
