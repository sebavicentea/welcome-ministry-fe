export class Pagination {
    pageNumber: number;
    pageSize: number;
    private initPageNumber= 0;
    private initPageSize: number;

    constructor( pageSize) {
      this.initPageSize= pageSize;
      this.resetPage();
    }

    resetPage() {
      this.pageNumber= this.initPageNumber;
      this.pageSize= this.initPageSize;
    }

    nextPage() {
      this.pageNumber++;
    }

    previousPage() {
      if (this.pageNumber === 0) {
        this.pageNumber --;
      }
    }

    getValue() {
      return { pageNumber: this.pageNumber, pageSize: this.pageSize}
    }
}
