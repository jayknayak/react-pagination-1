# react-pagination-1
Easy integratable pagination component for React Apps using react-paginate.

<img src="https://github.com/jayknayak/react-pagination-1/blob/main/img/Pagination.PNG" alt="Pagination" />


## Pre-Requisites
Apart from the "react" package, install the [react-paginate](https://www.npmjs.com/package/react-paginate) module:

npm install react-paginate --save

## Inputs
Takes the following three props:
* <b> itemsPerPage </b>: Total items count to display per page.
* <b> items </b>: List of items.
* <b> handlePageChange </b>: To handle application logic on page change event.

## Reference
```html
<PaginatedItems
  itemsPerPage={pageSize}
  items={itemList}
  handlePageChange={handlePageChange}
/>
```
