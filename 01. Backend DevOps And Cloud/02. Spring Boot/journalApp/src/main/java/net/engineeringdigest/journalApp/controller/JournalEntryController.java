package net.engineeringdigest.journalApp.controller;

import net.engineeringdigest.journalApp.entity.JournalEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class JournelEntryController {

    public Map<Long, JournalEntity> journalEntries = new HashMap<>();
    public List<JournalEntity> getAll(){
            return new ArrayList<>(journalEntries.values());
    }

}
