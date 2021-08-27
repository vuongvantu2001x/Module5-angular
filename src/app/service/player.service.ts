import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../enviroment';
import {Observable} from 'rxjs';
import {Player} from '../model/player';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(API_URL + '/players');
  }

  savePlayer(player: any): Observable<Player> {
    return this.http.post<Player>(API_URL + '/players', player);
  }

  findById(id: number): Observable<Player> {
    return this.http.get<Player>(`${API_URL}/players/${id}`);
  }

  updatePlayer(id: number, player: Player): Observable<Player> {
    return this.http.put<Player>(`${API_URL}/players/${id}`, player);
  }

  deletePlayer(id: number): Observable<Player> {
    return this.http.delete<Player>(`${API_URL}/players/${id}`);
  }
}
