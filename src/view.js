const React = require('react')
const {connect} = require('react-redux')
const {store} = require('./store')
const {fetchItems} = require('./actions')
const HomePage = require('./home-page')
const InventoryPage = require('./inventory-page')
const CreateItem = require('./create-items')
const SearchItems = require('./search-items')
const CreateCustomer = require('./create-customer')
const CustomerPage = require('./customer-page')
const SearchCustomers = require('./search-customers')

const View = ({currentView}) => {
  switch (currentView) {
    case 'inventoryPage':
      return <InventoryPage/>
    case 'customerPage':
      return <CustomerPage/>
    case 'createItem':
      return <CreateItem/>
    case 'searchItems':
      return <SearchItems/>
    case 'createCustomer':
      return <CreateCustomer/>
    case 'searchCustomers':
      return <SearchCustomers/>
    default:
      return <HomePage/>
  }
}

const mapStateToProps = ({currentView}) => {
  return {
    currentView
  }
}

module.exports = connect(mapStateToProps)(View)
