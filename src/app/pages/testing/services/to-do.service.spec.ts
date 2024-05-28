import { ToDoService } from "./to-do.service";
import { LoggerService } from "./logger.service";


// Grupo de pruebas
describe('toDoService', () => {
    it('debería agregar una nueva tarea', () => {
        const toDoService = new ToDoService(new LoggerService());
        toDoService.addNew({ 
            author: 'Autor Test', 
            title: 'Title Test', 
            description: 'Description Test' 
        });

        expect(toDoService.toDoS.length).toBe(1);
    });
});