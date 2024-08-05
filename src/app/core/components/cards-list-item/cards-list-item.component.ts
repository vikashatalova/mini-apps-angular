import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

interface ButtonItems {
    id: string,
    title: string | null,
    description: string | null,
    category: string | null
}

@Component({
    selector: 'app-cards-list-item',
    templateUrl: './cards-list-item.component.html',
    styleUrls: ['./cards-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardsListItemComponent implements OnInit{
    @Input() buttonItems: ButtonItems[] = [];

    public deletedButtonItems: ButtonItems[] = [];
    public favoriteButtonItems: ButtonItems[] = [];

    ngOnInit() {
        const deletedItemsData = localStorage.getItem('deletedItems');
        this.deletedButtonItems = deletedItemsData ? JSON.parse(deletedItemsData) : [];

        const favoriteItemsData = localStorage.getItem('favoriteItems');
        this.favoriteButtonItems = favoriteItemsData ? JSON.parse(favoriteItemsData) : [];
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

    public saveNewItem(item: any) {
        localStorage.setItem('buttonItems', JSON.stringify(item));
    }
}