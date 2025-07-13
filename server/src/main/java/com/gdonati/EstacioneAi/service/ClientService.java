package com.gdonati.EstacioneAi.service;

import com.gdonati.EstacioneAi.domain.Client;
import com.gdonati.EstacioneAi.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> searchAllClients(){return clientRepository.findAll();}

    public Client searchClient(Long id){return clientRepository.findById(id).orElse(null);}

    public Client createClient(Client client){return clientRepository.save(client);}

    public void deleteClient(Long id){clientRepository.deleteById(id);}
}
