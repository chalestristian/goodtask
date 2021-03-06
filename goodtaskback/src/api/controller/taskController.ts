import { Request, Response } from 'express'
import TaskUseCase from '../useCase/taskUseCase';

export default class taskController{

    async GetTasks(request: Request, response: Response) {
        const taskUseCase = new TaskUseCase();
        
        const getTaskRequest = await taskUseCase.getRequest(request)
        
        response.json(getTaskRequest)
        return response
    }

    async GetAllTasks(request: Request, response: Response){
        const taskUseCase = new TaskUseCase()
        
        const getAllTasks = await taskUseCase.getAllTasks()
        
        response.json(getAllTasks)
        return response
    }
    
    async AddTask(request: Request, response: Response) {
        const taskUseCase = new TaskUseCase()
        
        const newTaskRequest = await taskUseCase.createNewTask(request.body)
        
        response.json({response: newTaskRequest.resp}).status(newTaskRequest.code)
        return response
    }
    
    async UpdateTask(request: Request, response: Response) {
        const taskUseCase = new TaskUseCase()
        
        const newTaskRequest = await taskUseCase.updateTask(parseInt(request.params.id), request.body)
        
        response.json({response: newTaskRequest.resp}).status(newTaskRequest.code)
        return response
    }
    
    async DeactiveTask(request: Request, response: Response) {
        const taskUseCase = new TaskUseCase()
        
        const newTaskRequest = await taskUseCase.deactivateTask(parseInt(request.params.id))
        
        response.json({response: newTaskRequest.resp}).status(newTaskRequest.code)
        return response
    }
    
    async DeleteTask(request: Request, response: Response) {
        const taskUseCase = new TaskUseCase()
        
        const DeleteTask = await taskUseCase.deleteTask(parseInt(request.params.id))
        
        response.json({response: DeleteTask.resp}).status(DeleteTask.code)
        return response
    }    
} 