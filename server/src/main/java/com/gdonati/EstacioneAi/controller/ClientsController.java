package com.gdonati.EstacioneAi.controller;

import com.gdonati.EstacioneAi.domain.Client;
import com.gdonati.EstacioneAi.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientsController {

    @Autowired
    private final ClientService clientService;

    public ClientsController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping("/")
    public Client createClient(@RequestBody Client client){return clientService.createClient(client);}

    @GetMapping("/listclients")
    public List<Client> searchAllClients(){return clientService.searchAllClients();}

    @GetMapping("/{id}")
    public Client searchClient(@PathVariable Long id){return clientService.searchClient(id);}

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id){clientService.deleteClient(id);}
}
