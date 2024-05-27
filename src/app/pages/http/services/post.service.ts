import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public basicUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor( private _http: HttpClient ) { }

  get jsonPlaceholder(): Promise<any[]> {
    return this._http.get<any[]>(`${this.basicUrl}`).toPromise();
  }

  getJsonPlaceholderById(id: number): Promise<any> {
    return this._http.get<any>(`${this.basicUrl}/${id}`).toPromise();
  }

  createPost({ title, body, userId }: any): Promise<any> {
    const bodyRequest = { title, body, userId };
    return this._http.post<any>(`${this.basicUrl}`, bodyRequest).toPromise();
  }

  updatePost({ id, title, body, userId }): Promise<any> {
    return this._http.put<any>(`${this.basicUrl}/${id}`, { id, title, body, userId }).toPromise();
  }

  deletePost(id): Promise<any> {
    return this._http.delete<any>(`${this.basicUrl}/${id}`).toPromise();
  }

}
