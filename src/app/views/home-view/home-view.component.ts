import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

interface ButtonItems {
    id: string,
    title: string | null,
    description: string | null,
    category: string | null
}

@Component({
    selector: 'app-home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeViewComponent implements OnInit {
    public buttonItems?: ButtonItems[];
    public copyButtonItems?: ButtonItems[];
    public deletedButtonItems: ButtonItems[] = [];
    public favoriteButtonItems: ButtonItems[] = [];

    public createNewItemForm = new FormGroup({
        title: new FormControl('', []),
        description: new FormControl('', []),
    })
    public selectCategoriesForm = new FormGroup({
        category: new FormControl('', [])
    });
    public categories: String[] = ['shopping', 'bussines', 'other thing'];
    public selectedOption?: string;

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        if (!this.buttonItems) {
            this.loadDataFromLocalStorage();
        }

        const deletedItemsData = localStorage.getItem('deletedItems');
        this.deletedButtonItems = deletedItemsData ? JSON.parse(deletedItemsData) : [];

        const favoriteItemsData = localStorage.getItem('favoriteItems');
        this.favoriteButtonItems = favoriteItemsData ? JSON.parse(favoriteItemsData) : [];

        this.copyButtonItems = [...this.buttonItems!];
        
        this.createNewItemForm.get('title')?.valueChanges.subscribe(value => {
            console.log('Title changed:', value);
        });
        this.createNewItemForm.get('description')?.valueChanges.subscribe(value => {
            console.log('Description changed:', value);
        });
        this.selectCategoriesForm.get('category')?.valueChanges.subscribe(value => {
            console.log('Category changed:', value);
        });
    }

    getDataSelect(selectedValue: string | any) {
        this.selectedOption = selectedValue;

        this.buttonItems = this.copyButtonItems?.filter(item => item.category === this.selectedOption);
    }

    delFromLocalSt(item: any, index: number) {
        const storedData = localStorage.getItem('buttonItems');
        this.buttonItems = JSON.parse(storedData!);
        const findEL = this.buttonItems!.find((buttonItem: any) => buttonItem.id === item.id);        

        if (findEL) {
            // 1 добавить удаленный массив в новый массив
            this.deletedButtonItems.push(item);

            // 2 сохранить в новом хранилище
            this.saveDeletedButtons();
            
            // 3 удалить из старого хранилища
            this.buttonItems?.splice(index, 1);
            this.saveNewItem(this.buttonItems);
        } else {
            console.log('не получилось удалить запись');
        }
    }

    addFavorite(item: any, index: number) {
        const storedData = localStorage.getItem('buttonItems');
        this.buttonItems = JSON.parse(storedData!);
        const findEL = this.buttonItems!.find((buttonItem: any) => buttonItem.id === item.id);        

        if (findEL) {
            // 1 добавить удаленный массив в новый массив
            this.favoriteButtonItems.push(item);

            // 2 сохранить в новом хранилище
            this.saveFavoriteButtons();
            
            // 3 удалить из старого хранилища
            this.buttonItems?.splice(index, 1);
            this.saveNewItem(this.buttonItems);
        } else {
            console.log('не получилось удалить запись');
        }
    }

    public saveDeletedButtons() {
        localStorage.setItem('deletedItems', JSON.stringify(this.deletedButtonItems));
    }

    public saveFavoriteButtons() {
        localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteButtonItems));
    }

    public addNote() {
        this.createNewItemForm.get('title')?.valueChanges.subscribe(value => {
            console.log('Title changed:', value);
        });
        this.createNewItemForm.get('description')?.valueChanges.subscribe(value => {
            console.log('Description changed:', value);
        });
        this.selectCategoriesForm.get('category')?.valueChanges.subscribe(value => {
            console.log('Category changed:', value);
        });

        const newItem: ButtonItems = {
            id: this.generateId(),
            title: this.createNewItemForm.get('title')?.value || null,
            description: this.createNewItemForm.get('description')?.value || null,
            category: this.selectCategoriesForm.get('category')?.value || null
        }

        this.buttonItems?.push(newItem);
        // перезаписывает localStorage
        this.saveNewItem(this.buttonItems);
    }

    public filteredCategory(category: any) {
        console.log('filteredCategory', category);
    }

    public saveNewItem(item: any) {
        localStorage.setItem('buttonItems', JSON.stringify(item));
    }

    public loadDataFromLocalStorage() {
        const storedData = localStorage.getItem('buttonItems');
        this.buttonItems = storedData ? JSON.parse(storedData) : [];
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    private getDefaultData(): any[] {
        return [
            {
                id: '1',
                title: 'Lorem, ipsum dolor1',
                description: 'Lorem ipsum dolor sit amet.',
                category: 'shopping'
            },
            {
                id: '2',
                title: 'Lorem, ipsum dolor2',
                description: 'Lorem ipsum dolor sit amet.',
                category: 'bussines'
            },
            {
                id: '3',
                title: 'Lorem, ipsum dolor3',
                description: 'Lorem ipsum dolor sit amet.',
                category: 'shopping'
            },
        ]
    }
}