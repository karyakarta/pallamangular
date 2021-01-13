import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) {
    console.log('NodeService called') }

    getFilesystem() {
    console.log('getFilesystem called');
    return this.http.get<any>('assets/filesystem2.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getLazyFilesystem() {
    console.log('getLazyFilesystem called'); 
    return this.http.get<any>('assets/filesystem-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}