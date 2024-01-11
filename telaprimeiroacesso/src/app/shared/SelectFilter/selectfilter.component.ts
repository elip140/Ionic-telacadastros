import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';

@Component({
    selector: 'app-selectfilter',
    templateUrl: 'selectfilter.component.html',
})
export class SelectFilterComponent implements OnInit {
    @Input() items: Item[] = [];
    @Input() selectedItem: Item;
    @Input() title = 'Selecione o Item';

    @Output() selectionCancel = new EventEmitter<void>();
    @Output() selectionChange = new EventEmitter<Item>();

    filteredItems: Item[] = [];


    ngOnInit() {
        this.filteredItems = [...this.items];
    }

    trackItems(index: number, item: Item) {
        return item.value;
    }

    cancelChanges() {
        this.selectionCancel.emit();
    }

    /*confirmChanges() {
        this.selectionChange.emit(this.selectedItem);
    }*/

    searchbarInput(ev: any) {
        this.filterList(ev.target.value);
    }

    /**
     * Update the rendered view with
     * the provided search query. If no
     * query is provided, all data
     * will be rendered.
     */
    filterList(searchQuery: string | undefined) {
        /**
         * If no search query is defined,
         * return all options.
         */
        if (searchQuery === undefined) {
            this.filteredItems = [...this.items];
        } else {
            /**
             * Otherwise, normalize the search
             * query and check to see which items
             * contain the search query as a substring.
             */
            const normalizedQuery = searchQuery.toLowerCase();
            this.filteredItems = this.items.filter((item) => {
                return item.text.toLowerCase().includes(normalizedQuery);
            });
        }
    }


    handleChange(ev: any){
        this.selectedItem = ev.target.value;
        this.selectionChange.emit(this.selectedItem);
    }
}

export interface Item {
    text: string;
    value: string;
}