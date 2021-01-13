import {Component,OnInit} from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';
import {TreeTableModule} from 'primeng/treetable';
import Character from './Character';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {

 characters: Character[] = [
    {
    actor_name: 'Peter Dinklage',
    character_name: 'Tyrion Lannister',
    gender: 'Male',
        status: 'Alive'
    },
    {
    actor_name: 'Sean Bean',
    character_name: 'Ned Stark',
    gender: 'Male',
    status: 'Dead'
    },
    {
    actor_name: 'Emilia Clark',
    character_name: 'Khaleesi',
    gender: 'Female',
    status: 'Alive'
    },
    {
    actor_name: 'Catelyn Stark',
    character_name: 'Michelle Fairley',
    gender: 'Female',
    status: 'Dead'
    }
  ];
  
  files1: TreeNode[];

    files2: TreeNode[];

    cols: any[];

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
