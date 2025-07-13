package com.gdonati.EstacioneAi.controller;

import com.gdonati.EstacioneAi.dto.CarDto;
import com.gdonati.EstacioneAi.domain.Spot;
import com.gdonati.EstacioneAi.service.SpotService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/spot")
public class SpotController {
    private final SpotService spotService;

    public SpotController(SpotService spotService) {
        this.spotService = spotService;
    }

    @PostMapping("/")
    public Spot createSpot(@RequestBody Spot spot){return spotService.createSpot(spot);}

    @GetMapping("/spotlist")
    public List<Spot> searchAllSpot(){return spotService.searchAllSpot();}

    @GetMapping("/{id}")
    public Spot searchSpot(@PathVariable Long id){return spotService.searchSpot(id);}

    @PatchMapping("/{id}")
    public String updateSpotCar(@PathVariable Long id, @RequestBody CarDto dto){
        return spotService.updateSpotCar(id, dto.car_id());
    }

    @DeleteMapping("/{id}")
    public void deleteSpot(@PathVariable Long id){spotService.deleteSpot(id);}

}